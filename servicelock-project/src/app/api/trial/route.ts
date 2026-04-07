import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      companyName,
      phone,
      email,
      industry,
      missedCallProblem,
    } = body;

    if (!fullName || !companyName || !phone || !email || !industry || !missedCallProblem) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const trialAlertEmail = process.env.TRIAL_ALERT_EMAIL;

    if (!gmailUser || !gmailAppPassword || !trialAlertEmail) {
      return NextResponse.json(
        { success: false, message: 'Email environment variables are missing.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const subject = `New ServiceLock Trial Request: ${fullName} at ${companyName}`;

    const text = `
New ServiceLock Trial Request

Name: ${fullName}
Company: ${companyName}
Phone: ${phone}
Email: ${email}
Industry: ${industry}

What happens when they miss a call?
${missedCallProblem}

Submitted: ${submittedAt}
    `.trim();

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New ServiceLock Trial Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>What happens when they miss a call?</strong><br />${missedCallProblem}</p>
        <p><strong>Submitted:</strong> ${submittedAt}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"ServiceLock Trial Form" <${gmailUser}>`,
      to: trialAlertEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Trial form error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong sending the form.' },
      { status: 500 }
    );
  }
}
