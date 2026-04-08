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
        body: 'Hi, we just missed your call. What do you need help with?\n\nYou can reply here or answer these quick questions:\n• Service needed?\n• Zip code?\n• How urgent is it?',
      });
    }
  } catch (error) {
    console.error('Auto SMS after missed call failed:', error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://www.getservicelock.com/ServiceLock.mp3</Play>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml);
}
