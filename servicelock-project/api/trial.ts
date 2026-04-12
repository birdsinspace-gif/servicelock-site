import nodemailer from 'nodemailer';

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
      from: `"ServiceLock" <${process.env.GMAIL_USER}>`,
      to: process.env.TRIAL_ALERT_EMAIL,
      replyTo: email,
      subject: `New ServiceLock Trial: ${firstName} ${lastName} - ${businessName}`,
      text: buildTrialSummary(lead),
    });

    queueTrialAutomationPlaceholder(lead);

    return res.status(200).json({ success: true, next: '/trial-started' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
