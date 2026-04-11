import twilio from "twilio";

const TWIML_RESPONSE = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Thanks for calling ServiceLock. We will text you now to get started.</Say>
  <Hangup/>
</Response>`;

const SMS_BODY =
  "Hi, thanks for calling ServiceLock. We help you recover missed-call revenue automatically. Want to get started? Reply YES and I’ll send your setup link.";

function sendTwiml(res, body = TWIML_RESPONSE) {
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  return res.status(200).send(body);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      route: "/pages/api/twilio/voice.js",
    });
  }

  if (req.method !== "POST") {
    return sendTwiml(res);
  }

  const callerNumber = req.body?.From || "";

  try {
    if (callerNumber) {
      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: callerNumber,
        body: SMS_BODY,
      });
    }
  } catch (error) {
    console.error("Twilio missed-call SMS send failed.", error);
  }

  return sendTwiml(res);
}
