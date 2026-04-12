const VOICE_MP3_URL = 'https://www.getservicelock.com/Hello.mp3';

function buildVoiceTwiml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>${VOICE_MP3_URL}</Play>
</Response>`;
}

function sendVoiceTwiml(res) {
  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  return res.status(200).send(buildVoiceTwiml());
}

export default async function handler(req, res) {
  if (req.method === 'GET' || req.method === 'POST') {
    return sendVoiceTwiml(res);
  }

  if (req.method !== 'HEAD') {
    return res.status(405).send('Method Not Allowed');
  }

  res.setHeader('Allow', 'GET, POST, HEAD');
  return res.status(200).end();
}
