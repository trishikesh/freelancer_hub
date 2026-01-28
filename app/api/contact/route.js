import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullName, email, phone, businessName, message } = await req.json();

    // Validate required fields
    if (!fullName || !email || !phone || !businessName || !message) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create transporter using Gmail SMTP
    // Note: Use Gmail App Password for security (not regular password)
    // To generate: https://myaccount.google.com/apppasswords
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to business
    const businessMailOptions = {
      from: process.env.GMAIL_USER,
      to: 'tanya.24.rishikesh@gmail.com',
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This is an automated message from your website contact form.</small></p>
      `,
    };

    // Email to client (confirmation)
    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your message!',
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Hi ${fullName},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <hr>
        <h3>Your Information:</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>Freelancer Hub Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(businessMailOptions);
    await transporter.sendMail(clientMailOptions);

    return new Response(
      JSON.stringify({
        message: 'Email sent successfully!',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Email error:', error);
    return new Response(
      JSON.stringify({
        message: 'Failed to send email. Please try again later.',
        error: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
