import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const caller =
    req.body?.From ||
    req.query?.From ||
    '';

  try {
    if (caller) {
      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: caller,
        body: 'Hi, thanks for calling ServiceLock. We just missed your call. What kind of service do you need?',
      });
    }
  } catch (error) {
    console.error('Auto SMS after missed call failed:', error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    Hi, thanks for calling ServiceLock. We just missed your call. We will text you right now so you can tell us what you need. If you do not receive a text, please visit www.getservicelock.com to get started.
  </Say>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml);
}
