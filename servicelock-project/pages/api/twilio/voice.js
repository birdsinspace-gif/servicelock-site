import twilio from "twilio";

const SMS_BODY =
  "Hi, thanks for calling ServiceLock. We help you recover missed-call revenue automatically. Want to get started? Reply YES and I’ll send your setup link.";

const OWNER_NOTIFICATION_TO = "+14704085618";

const sentCallSidCache = new Map();

const MISSED_CALL_STATUSES = new Set(["no-answer", "busy"]);

function hasSentForCallSid(callSid = "") {
  return Boolean(callSid) && sentCallSidCache.has(callSid);
}

function markSentForCallSid(callSid = "") {
  if (!callSid) {
    return;
  }

  sentCallSidCache.set(callSid, Date.now());
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      route: "/pages/api/twilio/voice.js",
    });
  }

  if (req.method !== "POST") {
    return res.status(200).json({
      ok: true,
      ignored: true,
    });
  }

  const callStatus = (req.body?.CallStatus || "").trim().toLowerCase();
  const callerNumber = (req.body?.From || "").trim();
  const calledNumber = (req.body?.To || "").trim();
  const callSid = (req.body?.CallSid || "").trim();

  console.log("Received Twilio call status callback.", {
    callStatus,
    from: callerNumber,
    to: calledNumber,
    callSid,
  });

  if (!MISSED_CALL_STATUSES.has(callStatus)) {
    return res.status(200).json({
      ok: true,
      smsSent: false,
      reason: "status_did_not_match_missed_call_flow",
    });
  }

  if (!callerNumber || !callSid) {
    return res.status(200).json({
      ok: true,
      smsSent: false,
      reason: "missing_required_status_callback_fields",
    });
  }

  if (hasSentForCallSid(callSid)) {
    console.log("Skipping duplicate missed-call SMS for CallSid.", {
      callSid,
      from: callerNumber,
    });

    return res.status(200).json({
      ok: true,
      smsSent: false,
      reason: "duplicate_call_sid",
    });
  }

  try {
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: callerNumber,
      body: SMS_BODY,
    });

    try {
      await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: OWNER_NOTIFICATION_TO,
        body: `New lead: ${callerNumber} just called ServiceLock`,
      });

      console.log("Sent owner lead notification SMS.", {
        callSid,
        from: callerNumber,
        notifyTo: OWNER_NOTIFICATION_TO,
      });
    } catch (error) {
      console.error("Owner lead notification SMS failed.", {
        error,
        callSid,
        from: callerNumber,
        notifyTo: OWNER_NOTIFICATION_TO,
      });
    }

    markSentForCallSid(callSid);

    console.log("Sent missed-call SMS from status callback.", {
      callSid,
      callStatus,
      from: callerNumber,
      to: calledNumber,
    });
  } catch (error) {
    console.error("Twilio missed-call SMS send failed.", {
      error,
      callSid,
      callStatus,
      from: callerNumber,
      to: calledNumber,
    });

    return res.status(500).json({
      ok: false,
      smsSent: false,
      error: "twilio_sms_send_failed",
    });
  }

  return res.status(200).json({
    ok: true,
    smsSent: true,
    callSid,
    callStatus,
  });
}
