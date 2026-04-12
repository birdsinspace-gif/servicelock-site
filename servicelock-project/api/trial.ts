import nodemailer from 'nodemailer';
import { registerOnboardingLead } from './_lib/onboarding.ts';

const OPERATIONAL_ALERT_EMAIL =
  process.env.TRIAL_ALERT_EMAIL || 'KyleDChristopher@gmail.com';
const HUBSPOT_ACCESS_TOKEN =
  process.env.HUBSPOT_PRIVATE_APP_TOKEN || process.env.HUBSPOT_ACCESS_TOKEN;
const HUBSPOT_NOTES_PROPERTY =
  process.env.HUBSPOT_SERVICELOCK_NOTES_PROPERTY ||
  process.env.HUBSPOT_NOTES_PROPERTY ||
  '';
const HUBSPOT_SOURCE_PROPERTY =
  process.env.HUBSPOT_SERVICELOCK_SOURCE_PROPERTY ||
  process.env.HUBSPOT_SOURCE_PROPERTY ||
  '';
const HUBSPOT_SOURCE_VALUE = 'servicelock_trial_form';

const nurtureSequence = [
  'Day 0: Welcome + setup instructions',
  'Day 1: Why missed calls cost real revenue',
  'Day 3: How to improve lead capture and response time',
  'Day 5: Best practices for converting more inbound calls',
  'Day 8: Operational tips to avoid missed opportunities',
  'Day 11: Your trial is ending soon',
  'Day 13: Ready to continue capturing more jobs?',
];

function buildTrialSummary(lead) {
  return `
Trial Lead
----------
First Name: ${lead.firstName}
Last Name: ${lead.lastName}
Business Name: ${lead.businessName}
Email: ${lead.email}
Phone Number: ${lead.phoneNumber}
Website: ${lead.website}
Best Time to Reach You: ${lead.bestTimeToReachYou || 'Not provided'}

Post-signup path:
- Confirmation route: /trial-started
- Setup feel: no credit card required, simple setup, be live fast

Placeholder nurture sequence:
${nurtureSequence.map((item) => `- ${item}`).join('\n')}

Placeholder continuation CTA:
- CTA copy: I'm Ready to Capture More Jobs
- Billing link placeholder: ${process.env.STRIPE_CONTINUATION_LINK || 'REPLACE_WITH_STRIPE_PAYMENT_LINK'}
  `;
}

function buildHubSpotNoteValue(lead) {
  return [
    `Website: ${lead.website}`,
    `Best Time to Reach You: ${lead.bestTimeToReachYou || 'Not provided'}`,
    `Continuation Link: ${process.env.STRIPE_CONTINUATION_LINK || 'REPLACE_WITH_STRIPE_PAYMENT_LINK'}`,
  ].join('\n');
}

async function upsertHubSpotContact(lead) {
  if (!HUBSPOT_ACCESS_TOKEN) {
    return { configured: false };
  }

  const properties = {
    email: lead.email,
    firstname: lead.firstName,
    lastname: lead.lastName,
    company: lead.businessName,
    phone: lead.phoneNumber,
  };

  if (HUBSPOT_NOTES_PROPERTY) {
    properties[HUBSPOT_NOTES_PROPERTY] = buildHubSpotNoteValue(lead);
  }

  if (HUBSPOT_SOURCE_PROPERTY) {
    properties[HUBSPOT_SOURCE_PROPERTY] = HUBSPOT_SOURCE_VALUE;
  }

  const searchResponse = await fetch(
    'https://api.hubapi.com/crm/v3/objects/contacts/search',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [
              {
                propertyName: 'email',
                operator: 'EQ',
                value: lead.email,
              },
            ],
          },
        ],
        properties: ['email'],
        limit: 1,
      }),
    }
  );

  const searchPayload = await searchResponse.json().catch(() => null);

  if (!searchResponse.ok) {
    throw new Error(
      searchPayload?.message ||
        `HubSpot search failed with status ${searchResponse.status}.`
    );
  }

  const existingId = searchPayload?.results?.[0]?.id;
  const endpoint = existingId
    ? `https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`
    : 'https://api.hubapi.com/crm/v3/objects/contacts';
  const method = existingId ? 'PATCH' : 'POST';

  const upsertResponse = await fetch(endpoint, {
    method,
    headers: {
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ properties }),
  });

  const upsertPayload = await upsertResponse.json().catch(() => null);

  if (!upsertResponse.ok) {
    throw new Error(
      upsertPayload?.message ||
        `HubSpot upsert failed with status ${upsertResponse.status}.`
    );
  }

  return {
    configured: true,
    id: upsertPayload?.id || existingId || null,
  };
}

function queueTrialAutomationPlaceholder(lead) {
  // Placeholder integration hook for trial onboarding and nurture automation.
  // Swap this for your CRM, email platform, or queue later without changing the form flow.
  console.log('ServiceLock trial automation placeholder', {
    email: lead.email,
    nurtureSequence,
    continuationLink:
      process.env.STRIPE_CONTINUATION_LINK || 'REPLACE_WITH_STRIPE_PAYMENT_LINK',
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false });
  }

  try {
    const {
      firstName,
      lastName,
      businessName,
      email,
      phoneNumber,
      website,
      bestTimeToReachYou,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !businessName ||
      !email ||
      !phoneNumber ||
      !website
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please complete the required trial fields.',
      });
    }

    const lead = {
      firstName,
      lastName,
      businessName,
      email,
      phoneNumber,
      website,
      bestTimeToReachYou,
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Kyle" <${process.env.GMAIL_USER}>`,
      to: OPERATIONAL_ALERT_EMAIL,
      replyTo: email,
      subject: `New ServiceLock Trial: ${firstName} ${lastName} - ${businessName}`,
      text: buildTrialSummary(lead),
    });

    try {
      const hubspotResult = await upsertHubSpotContact(lead);
      if (hubspotResult.configured) {
        console.log('ServiceLock HubSpot contact synced.', {
          email: lead.email,
          id: hubspotResult.id,
        });
      }
    } catch (hubspotError) {
      console.error('ServiceLock HubSpot sync failed.', hubspotError);
    }

    try {
      await registerOnboardingLead({
        email: lead.email,
        firstName: lead.firstName,
        businessName: lead.businessName,
        phoneNumber: lead.phoneNumber,
        website: lead.website,
        replyTo: lead.email,
      });
    } catch (onboardingError) {
      console.error('ServiceLock onboarding registration failed.', onboardingError);
    }

    queueTrialAutomationPlaceholder(lead);

    return res.status(200).json({ success: true, next: '/trial-started' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
