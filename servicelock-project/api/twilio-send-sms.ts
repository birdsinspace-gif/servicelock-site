import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }

  try {
    const { to, body } = req.body || {};

    if (!to) {
      return res.status(400).json({
        success: false,
        message: 'Missing "to" phone number.',
      });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !from) {
      return res.status(500).json({
        success: false,
        message: 'Missing Twilio environment variables.',
      });
    }

    const client = twilio(accountSid, authToken);

    const message = await client.messages.create({
      from,
      to,
      body:
        body ||
        'Hi, thanks for calling ServiceLock. We just missed your call. What kind of service do you need?',
    });

    return res.status(200).json({
      success: true,
      sid: message.sid,
      status: message.status,
    });
  } catch (error) {
    console.error('Twilio SMS error:', error);

    return res.status(500).json({
      success: false,
      message: 'SMS send failed.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
