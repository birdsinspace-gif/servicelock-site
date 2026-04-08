import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const to = req.query.to;

    if (!to || typeof to !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Add ?to=+1YOURNUMBER to the URL.',
      });
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const message = await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
      body: 'Test from ServiceLock. If you got this, Twilio SMS is wired correctly.',
    });

    return res.status(200).json({
      success: true,
      sid: message.sid,
      status: message.status,
    });
  } catch (error) {
    console.error('Twilio test SMS error:', error);

    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
