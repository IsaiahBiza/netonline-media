import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract fields from the request body
    const { name, email, subject, message, companyName, services, budget, timeline, additionalInfo } = req.body;

    // Determine if the request is from the contact form or the client qualifying form
    const isContactForm = !!subject && !!message;

    // Set up Nodemailer transport using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'netonlinemedia.com',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER || 'info@netonlinemedia.com', // Email username from env
        pass: process.env.SMTP_PASS || 'Shaloam3!&@', // Email password from env
      },
    });

    // Define mail options based on the form type
    const mailOptions = {
      from: `"Netonline Media" <${process.env.SMTP_USER || 'info@netonlinemedia.com'}>`,
      to: process.env.SMTP_USER || 'info@netonlinemedia.com', // Send to your email
      subject: isContactForm ? `New Contact Form Submission: ${subject}` : 'New Client Submission',
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

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
