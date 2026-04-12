import twilio from 'twilio';

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

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>${VOICE_MP3_URL}</Play>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml);
}
