import '../styles/globals.css'; // Import Tailwind and custom global styles
import { ReactNode } from 'react';
import NavBar from './components/NavBar';
import ClientHeroSection from './components/ClientHeroSection'; // Import ClientHeroSection for homepage Hero

// Metadata for the entire site
export const metadata = {
  title: 'Netonline Media | AI Solutions',
  description: 'Netonline Media - AI-powered business solutions',
  viewport: 'width=device-width, initial-scale=1',
  author: 'Isaiah Bizabani',
  keywords: 'AI-powered solutions London, Custom AI solutions UK, AI business automation, Generative AI London, AI content creation UK',
};
// Proper viewport configuration (outside metadata)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-lightGrey text-darkGrey">
        {/* Navbar */}
        <NavBar />

        {/* Hero section only on homepage */}
        <ClientHeroSection /> {/* Conditionally renders HeroSection on homepage */}

        {/* Main content */}
        <main className="container mx-auto p-4">
          {children}
        </main>

        {/* Footer directly in layout.tsx */}
        <footer className="bg-darkGrey text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div className="text-center md:text-left mb-4">
              <h3 className="text-2xl font-bold mb-2 text-primaryRed">Netonline Media</h3>
              <p className="text-gray-400">AI-Powered Business Solutions</p>
            </div>

            {/* Contact Details */}
            <div className="text-center md:text-left space-y-2">
              <h4 className="text-xl font-bold">Contact Us</h4>
              <p>Address: 7 Harrow Close, Chessington, Surrey, KT9 2HR</p>
              <p>Email: <a href="mailto:info@netonlinemedia.com" className="text-primaryRed hover:underline">info@netonlinemedia.com</a></p>
              <p>Sales: <a href="tel:+442037293305" className="text-primaryRed hover:underline">+44 20 3729 3305</a></p>
              <p>Support: <a href="tel:+442045992897" className="text-primaryRed hover:underline">+44 20 4599 2897</a></p>
            </div>

            {/* Footer Links */}
            <div className="text-center md:text-right space-y-2">
              <h4 className="text-xl font-bold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/cookies" className="text-gray-400 hover:text-white">Cookies Policy</a></li>
                <li><a href="/gdpr-privacy" className="text-gray-400 hover:text-white">GDPR Privacy Statement</a></li>
                <li><a href="/ai-usage" className="text-gray-400 hover:text-white">AI Usage Statement</a></li>
                <li><a href="/terms-and-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center mt-6 text-sm">
            <p>&copy; {new Date().getFullYear()} Netonline Media. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
