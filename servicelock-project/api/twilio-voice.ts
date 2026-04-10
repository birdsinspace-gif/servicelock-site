import twilio from 'twilio';

const SMS_BODY = `Hey — thanks for your call.

We just caught your missed call. This is exactly how businesses capture new jobs instantly.

To get started, just reply with:

1. What do you need help with?
2. Is this urgent? (yes/no)

We’ll take it from there 👍`;

const VOICE_MESSAGE =
  'Thanks for calling. We are tied up right now, but we will text you immediately.';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      ok: true,
      route: '/api/twilio-voice',
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const caller =
    req.body?.From ||
    req.query?.From ||
    '';
  const recipient =
    req.body?.To ||
    req.query?.To ||
    '';
  const sender = process.env.TWILIO_PHONE_NUMBER;

  try {
    if (caller) {
      console.log('Attempting to send missed-call follow-up SMS.', {
        from: sender,
        to: caller,
        calledNumber: recipient,
      });

      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      const message = await client.messages.create({
        from: sender,
        to: caller,
        body: SMS_BODY,
      });

      console.log('Missed-call follow-up SMS sent successfully.', {
        sid: message.sid,
        status: message.status,
        from: sender,
        to: caller,
        calledNumber: recipient,
      });
    }
  } catch (error) {
    console.error('Failed to send missed-call follow-up SMS.', {
      error,
      from: sender,
      to: caller,
      calledNumber: recipient,
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>${VOICE_MESSAGE}</Say>
  <Hangup/>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml);
}
