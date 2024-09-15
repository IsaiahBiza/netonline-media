// app/contact/page.tsx (Server-Side Component)

// Correct import path for ContactForm
import ContactForm from '../components/ContactForm'; // Adjusted to go up one directory and into components

// Server-side metadata export
export const metadata = {
  title: 'Contact Us | Netonline Media',
  description: 'Get in touch with Netonline Media for AI-powered business solutions. We’d love to hear from you!',
  keywords: 'Contact Netonline Media, AI solutions contact, business AI inquiries, AI-powered solutions UK',
  openGraph: {
    type: 'website',
    url: 'https://netonlinemedia.com/contact',
    title: 'Contact Us | Netonline Media',
    description: 'Get in touch with Netonline Media for AI-powered business solutions.',
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
