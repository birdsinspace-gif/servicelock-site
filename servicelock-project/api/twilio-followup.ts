import twilio from 'twilio';

const REPLY_BODY = `Perfect — this is exactly how your customers would engage.

We capture the lead, qualify it, and notify you instantly.

Want this set up for your business?`;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      ok: true,
      route: '/api/twilio-followup',
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const body =
    req.body?.Body ||
    req.query?.Body ||
    '';

  if (!body.trim()) {
    const emptyResponse = new twilio.twiml.MessagingResponse();
    return res
      .status(200)
      .setHeader('Content-Type', 'text/xml')
      .send(emptyResponse.toString());
  }

  const messagingResponse = new twilio.twiml.MessagingResponse();
  messagingResponse.message(REPLY_BODY);

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(messagingResponse.toString());
}
