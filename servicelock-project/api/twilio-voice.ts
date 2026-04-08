export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    Hi, thanks for calling ServiceLock. We just missed your call, but we will text you right now so you can tell us what you need.
  </Say>
  <Pause length="1"/>
  <Redirect method="POST">https://www.getservicelock.com/api/twilio-followup</Redirect>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml);
}
