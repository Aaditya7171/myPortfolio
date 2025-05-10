import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendContactEmail(name: string, email: string, message: string) {
  const emailContent = {
    to: "risingaditya91@gmail.com",
    from: "noreply@portfolio.com", // This should be a verified sender in SendGrid
    subject: `Portfolio Contact: Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await mailService.send(emailContent);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}
