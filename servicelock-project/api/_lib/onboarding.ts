import { Redis } from "@upstash/redis";

type SequenceStepKey =
  | "welcome"
  | "best_practices"
  | "check_in"
  | "trial_ending"
  | "final_day";

type SequenceStep = {
  key: SequenceStepKey;
  dayOffset: number;
  subject: string;
  preview: string;
  ctaLabel: string;
  body: string[];
};

export type ServiceLockOnboardingLead = {
  email: string;
  firstName: string;
  brand: "servicelock";
  signupDate: string;
  onboardingStatus: "active" | "complete";
  trialEndDate: string;
  replyTo: string;
  businessName: string;
  phoneNumber: string;
  website: string;
  sendHistory: Array<{
    stepKey: SequenceStepKey;
    sentAt: string;
    messageId: string | null;
  }>;
};

type RegisterLeadInput = {
  email: string;
  firstName: string;
  businessName?: string;
  phoneNumber?: string;
  website?: string;
  replyTo?: string;
};

type ProcessDueOptions = {
  forcedDateKey?: string;
};

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const BRAND = "servicelock";
const BRAND_NAME = "ServiceLock";
const DEFAULT_REPLY_TO = "KyleDChristopher@gmail.com";
const CHECKOUT_URL =
  process.env.SERVICELOCK_ONBOARDING_CHECKOUT_URL ||
  process.env.STRIPE_CONTINUATION_LINK ||
  "";
const FROM_EMAIL = process.env.SERVICELOCK_ONBOARDING_FROM_EMAIL || "";
const REPLY_TO = process.env.SERVICELOCK_ONBOARDING_REPLY_TO || DEFAULT_REPLY_TO;
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const redis = createRedisClient();

const SEQUENCE: SequenceStep[] = [
  {
    key: "welcome",
    dayOffset: 0,
    subject: "Welcome to ServiceLock",
    preview: "Here’s how to get your missed-call recovery flow live.",
    ctaLabel: "Continue Your Trial",
    body: [
      "You’re in. ServiceLock is built to help your business recover real jobs from missed inbound calls without adding friction for your team.",
      "Start by reviewing your demo flow, confirming the right callback owner, and making sure your missed-call path is routed the way you want it.",
      "If you want help getting set up, just reply to this email and Kyle can walk through it with you.",
    ],
  },
  {
    key: "best_practices",
    dayOffset: 1,
    subject: "Day 1: Best practices for recovering missed-call revenue",
    preview: "A few quick ways to tighten the flow in your first week.",
    ctaLabel: "Review Your Trial",
    body: [
      "The strongest ServiceLock results usually come from simple follow-up language, fast callback ownership, and a clear process for handling inbound leads after hours or while the team is busy.",
      "If you haven’t done it yet, test the full missed-call experience from the customer side so you can hear exactly what prospects are getting.",
      "Reply if you want feedback on your setup or your response sequence.",
    ],
  },
  {
    key: "check_in",
    dayOffset: 5,
    subject: "Day 5: Quick ServiceLock check-in",
    preview: "If anything feels loose, this is the moment to tighten it up.",
    ctaLabel: "Book A Walkthrough",
    body: [
      "By now you should have a sense of how ServiceLock fits into your day-to-day operation.",
      "If the flow is working, great. If not, now is the best time to sharpen it before your trial window gets away from you.",
      "You can reply directly to this email if you want help reviewing the setup or missed-call conversion path.",
    ],
  },
  {
    key: "trial_ending",
    dayOffset: 11,
    subject: "Day 11: Your ServiceLock trial is almost over",
    preview: "A quick reminder before the trial window closes.",
    ctaLabel: "Keep ServiceLock Running",
    body: [
      "Your ServiceLock trial is winding down, so this is the right time to decide whether you want to keep the missed-call recovery flow active.",
      "If it is already helping you close the gap on inbound opportunities, don’t let it shut off right as the process starts to feel natural.",
      "If you want help deciding, reply and Kyle can walk through the right next step.",
    ],
  },
  {
    key: "final_day",
    dayOffset: 14,
    subject: "Final day: continue with ServiceLock",
    preview: "Your trial ends today. Here’s the direct continuation link.",
    ctaLabel: "Activate Paid Access",
    body: [
      "Today is the final day of your current ServiceLock trial.",
      "If you want to keep recovering missed-call revenue automatically, use the continuation link below to stay live.",
      "If you have questions before moving forward, reply directly and Kyle can help.",
    ],
  },
];

function createRedisClient() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

function hasOnboardingInfrastructure() {
  return Boolean(redis && RESEND_API_KEY && FROM_EMAIL);
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function leadKey(email: string) {
  return `onboarding:${BRAND}:lead:${normalizeEmail(email)}`;
}

function queueKey(dateKey: string) {
  return `onboarding:${BRAND}:queue:${dateKey}`;
}

function queueMember(email: string, stepKey: SequenceStepKey) {
  return `${normalizeEmail(email)}|${stepKey}`;
}

function parseQueueMember(member: string) {
  const [email, stepKey] = member.split("|") as [string, SequenceStepKey];
  return { email, stepKey };
}

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * DAY_IN_MS);
}

function getStep(stepKey: SequenceStepKey) {
  return SEQUENCE.find((step) => step.key === stepKey);
}

function buildEmailHtml(lead: ServiceLockOnboardingLead, step: SequenceStep) {
  const greetingName = lead.firstName || "there";
  const ctaUrl = step.key === "check_in"
    ? "https://calendly.com/kyledchristopher/demo"
    : CHECKOUT_URL || "https://calendly.com/kyledchristopher/demo";

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <p style="margin: 0 0 16px;">Hi ${greetingName},</p>
      ${step.body
        .map((paragraph) => `<p style="margin: 0 0 16px;">${paragraph}</p>`)
        .join("")}
      <p style="margin: 24px 0;">
        <a
          href="${ctaUrl}"
          style="display: inline-block; background: #ca8a04; color: #111827; text-decoration: none; padding: 12px 18px; border-radius: 8px; font-weight: 700;"
        >
          ${step.ctaLabel}
        </a>
      </p>
      <p style="margin: 24px 0 0; color: #4b5563;">Kyle</p>
      <p style="margin: 4px 0 0; color: #6b7280;">${BRAND_NAME}</p>
    </div>
  `;
}

async function sendSequenceEmail(
  lead: ServiceLockOnboardingLead,
  step: SequenceStep
) {
  if (!RESEND_API_KEY || !FROM_EMAIL) {
    return { configured: false, messageId: null };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Kyle <${FROM_EMAIL}>`,
      to: [lead.email],
      reply_to: lead.replyTo || REPLY_TO,
      subject: step.subject,
      html: buildEmailHtml(lead, step),
    }),
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      payload?.message ||
        payload?.error?.message ||
        `Resend request failed with status ${response.status}.`
    );
  }

  return { configured: true, messageId: payload?.id ?? null };
}

function buildFreshLead(input: RegisterLeadInput): ServiceLockOnboardingLead {
  const now = new Date();

  return {
    email: normalizeEmail(input.email),
    firstName: input.firstName,
    brand: "servicelock",
    signupDate: now.toISOString(),
    onboardingStatus: "active",
    trialEndDate: addDays(now, 14).toISOString(),
    replyTo: input.replyTo || REPLY_TO,
    businessName: input.businessName || "",
    phoneNumber: input.phoneNumber || "",
    website: input.website || "",
    sendHistory: [],
  };
}

async function saveLead(lead: ServiceLockOnboardingLead) {
  if (!redis) {
    return;
  }

  await redis.set(leadKey(lead.email), lead);
}

async function enqueueFutureSteps(lead: ServiceLockOnboardingLead) {
  if (!redis) {
    return;
  }

  const sent = new Set(lead.sendHistory.map((entry) => entry.stepKey));
  const signupDate = new Date(lead.signupDate);

  for (const step of SEQUENCE) {
    if (step.dayOffset === 0 || sent.has(step.key)) {
      continue;
    }

    await redis.sadd(
      queueKey(toDateKey(addDays(signupDate, step.dayOffset))),
      queueMember(lead.email, step.key)
    );
  }
}

async function markStepSent(
  lead: ServiceLockOnboardingLead,
  stepKey: SequenceStepKey,
  messageId: string | null
) {
  const nextHistory = lead.sendHistory.some((entry) => entry.stepKey === stepKey)
    ? lead.sendHistory
    : [
        ...lead.sendHistory,
        {
          stepKey,
          sentAt: new Date().toISOString(),
          messageId,
        },
      ];

  const nextLead: ServiceLockOnboardingLead = {
    ...lead,
    sendHistory: nextHistory,
    onboardingStatus: stepKey === "final_day" ? "complete" : lead.onboardingStatus,
  };

  await saveLead(nextLead);
  return nextLead;
}

export async function registerOnboardingLead(input: RegisterLeadInput) {
  if (!hasOnboardingInfrastructure()) {
    console.warn("ServiceLock onboarding skipped: missing Redis or Resend configuration.");
    return { configured: false };
  }

  const existing = await redis!.get<ServiceLockOnboardingLead>(leadKey(input.email));
  const lead =
    !existing || existing.onboardingStatus === "complete"
      ? buildFreshLead(input)
      : {
          ...existing,
          firstName: input.firstName || existing.firstName,
          replyTo: input.replyTo || existing.replyTo,
          businessName: input.businessName || existing.businessName,
          phoneNumber: input.phoneNumber || existing.phoneNumber,
          website: input.website || existing.website,
        };

  const hasWelcome = lead.sendHistory.some((entry) => entry.stepKey === "welcome");

  if (!hasWelcome) {
    const welcomeStep = getStep("welcome");
    if (welcomeStep) {
      const result = await sendSequenceEmail(lead, welcomeStep);
      if (result.configured) {
        await markStepSent(lead, "welcome", result.messageId);
      }
    }
  } else {
    await saveLead(lead);
  }

  const latestLead =
    (await redis!.get<ServiceLockOnboardingLead>(leadKey(input.email))) || lead;
  await enqueueFutureSteps(latestLead);

  return { configured: true };
}

export async function processDueOnboardingEmails(options: ProcessDueOptions = {}) {
  if (!hasOnboardingInfrastructure()) {
    return {
      configured: false,
      processed: 0,
      sent: 0,
    };
  }

  const todayKey = options.forcedDateKey || toDateKey(new Date());
  const members = await redis!.smembers<string[]>(queueKey(todayKey));
  let sent = 0;

  for (const member of members || []) {
    const { email, stepKey } = parseQueueMember(member);
    const step = getStep(stepKey);
    const lead = await redis!.get<ServiceLockOnboardingLead>(leadKey(email));

    if (!step || !lead || lead.onboardingStatus === "complete") {
      await redis!.srem(queueKey(todayKey), member);
      continue;
    }

    if (lead.sendHistory.some((entry) => entry.stepKey === stepKey)) {
      await redis!.srem(queueKey(todayKey), member);
      continue;
    }

    const result = await sendSequenceEmail(lead, step);
    if (result.configured) {
      await markStepSent(lead, stepKey, result.messageId);
      sent += 1;
    }

    await redis!.srem(queueKey(todayKey), member);
  }

  return {
    configured: true,
    processed: members?.length || 0,
    sent,
    dateKey: todayKey,
  };
}
