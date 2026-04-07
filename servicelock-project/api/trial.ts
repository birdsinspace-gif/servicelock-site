import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false });
  }

  try {
    const {
      fullName,
      companyName,
      phone,
      email,
      industry,
      missedCallProblem,
    } = req.body;

    if (!fullName || !companyName || !phone || !email) {
      return res.status(400).json({ success: false });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"ServiceLock" <${process.env.GMAIL_USER}>`,
      to: process.env.TRIAL_ALERT_EMAIL,
      replyTo: email,
      subject: `New Trial: ${fullName} - ${companyName}`,
      text: `
Name: ${fullName}
Company: ${companyName}
Phone: ${phone}
Email: ${email}
Industry: ${industry}

Problem:
${missedCallProblem}
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
