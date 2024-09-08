import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Extract fields from the request body
  const {
    name,
    email,
    subject,
    message,
    companyName,
    services,
    budget,
    timeline,
    additionalInfo,
  } = req.body;

  // Check if it's a contact form or a qualifying form
  const isContactForm = !!subject && !!message;

  // Validate required fields for each form type
  if (isContactForm) {
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields in contact form' });
    }
  } else {
    // Validation for the client qualifying form
    if (!name || !email || !companyName || !services || !budget || !timeline) {
      return res.status(400).json({ message: 'Missing required fields in client qualifying form' });
    }
  }

  try {
    // Set up Nodemailer transport using provided email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'netonlinemedia.com',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER || 'info@netonlinemedia.com', // Your email
        pass: process.env.SMTP_PASS, // Your password
      },
    });

    // Define mail options based on the form type
    const mailOptions = {
      from: `"Netonline Media" <${
        process.env.SMTP_USER || 'info@netonlinemedia.com'
      }>`,
      to: process.env.SMTP_USER || 'info@netonlinemedia.com', // Send to your email
      subject: isContactForm
        ? `New Contact Form Submission: ${subject}`
        : 'New Client Submission',
      text: isContactForm
        ? `You have a new contact form submission:
           Name: ${name}
           Email: ${email}
           Subject: ${subject}
           Message: ${message}`
        : `You have a new client qualifying form submission:
           Name: ${name}
           Email: ${email}
           Company Name: ${companyName}
           Services: ${services ? services.join(', ') : 'N/A'}
           Budget: ${budget}
           Timeline: ${timeline}
           Additional Info: ${additionalInfo || 'N/A'}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Respond with success and send the email info as feedback
    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({
      message: 'Error sending email',
      error: error.message || 'Unknown error',
    });
  }
}
