import twilio from 'twilio';

const FOLLOW_UP_BODY = `Got it, thanks.

This is exactly how ServiceLock captures and converts missed calls into real jobs automatically.

Want to turn this on for your business?
Reply YES or NO.`;

const YES_BODY = `Great, you're ready to start recovering revenue from missed calls.

Get set up in under 2 minutes:
https://www.getservicelock.com/#trial`;

const NO_BODY = `All good.

Just know most missed calls go to the next company within minutes.

You can start free anytime:
https://www.getservicelock.com/#trial`;

const conversationState = new Map();

function getConversationStage(phoneNumber = '') {
  return conversationState.get(phoneNumber);
}

function setConversationStage(phoneNumber = '', stage) {
  if (!phoneNumber) {
    return;
  }

  conversationState.set(phoneNumber, stage);
}

function clearConversationStage(phoneNumber = '') {
  if (!phoneNumber) {
    return;
  }

  conversationState.delete(phoneNumber);
}

function normalizeIncomingMessage(value = '') {
  return value.trim().toLowerCase();
}

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
  const from =
    req.body?.From ||
    req.query?.From ||
    '';
  const normalizedBody = normalizeIncomingMessage(body);

  if (!normalizedBody) {
    const emptyResponse = new twilio.twiml.MessagingResponse();
    return res
      .status(200)
      .setHeader('Content-Type', 'text/xml')
      .send(emptyResponse.toString());
  }

  const messagingResponse = new twilio.twiml.MessagingResponse();
  const isAwaitingYesNo = getConversationStage(from) === 'awaiting_yes_no';

  if (isAwaitingYesNo && normalizedBody === 'yes') {
    messagingResponse.message(YES_BODY);
    clearConversationStage(from);
  } else if (isAwaitingYesNo && normalizedBody === 'no') {
    messagingResponse.message(NO_BODY);
    clearConversationStage(from);
  } else {
    messagingResponse.message(FOLLOW_UP_BODY);
    setConversationStage(from, 'awaiting_yes_no');
  }

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(messagingResponse.toString());
}
