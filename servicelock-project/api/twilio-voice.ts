import twilio from 'twilio';

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

  try {
    if (caller) {
      console.log('Attempting to send ServiceLock follow-up SMS.', {
        from: process.env.TWILIO_PHONE_NUMBER,
        to: caller,
        calledNumber: recipient,
      });

      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      const message = await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: caller,
        body: 'Hey, this is ServiceLock. We respond instantly to missed calls. What service do you need help with?',
      });

      console.log('ServiceLock follow-up SMS sent successfully.', {
        sid: message.sid,
        status: message.status,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: caller,
        calledNumber: recipient,
      });
    }
  } catch (error) {
    console.error('Failed to send ServiceLock follow-up SMS.', {
      error,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: caller,
      calledNumber: recipient,
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Thanks for calling ServiceLock. We are tied up right now, but we will text you immediately.</Say>
  <Hangup/>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml);
}
