import twilio from 'twilio';

const SMS_BODY = `Hey, we just caught your call.

Reply with:

1. What do you need help with?
2. Is this urgent? (yes/no)

We’ll take it from there.`;

const VOICE_MP3_URL = 'https://www.getservicelock.com/ServiceLock.mp3';

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
  <Play>${VOICE_MP3_URL}</Play>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml);
}
