const YES_RESPONSE = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>Great, you're ready to recover missed-call revenue. Start here: https://www.getservicelock.com/#trial</Message>
</Response>`;

const DEFAULT_RESPONSE = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>ServiceLock helps you automatically recover missed-call revenue by instantly texting back missed callers. Reply YES to get started.</Message>
</Response>`;

function sendTwiml(res, body = DEFAULT_RESPONSE) {
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  return res.status(200).send(body);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      route: "/pages/api/twilio/sms.js",
    });
  }

  if (req.method !== "POST") {
    return sendTwiml(res);
  }

  try {
    const normalizedBody = (req.body?.Body || "").trim().toLowerCase();

    if (normalizedBody.includes("yes")) {
      return sendTwiml(res, YES_RESPONSE);
    }
  } catch (error) {
    console.error("Twilio inbound SMS handling failed.", error);
  }

  return sendTwiml(res);
}
