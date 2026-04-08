import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say(
    { voice: 'alice' },
    'Hi, thanks for calling ServiceLock. We just missed your call, but we will text you right now so you can tell us what you need.'
  );

  return res
    .status(200)
    .setHeader('Content-Type', 'text/xml')
    .send(twiml.toString());
}
