'use client';

import './globals.css';
import { ReactNode, useEffect } from 'react';
import NavBar from './components/NavBar';
import CookieBanner from './components/CookieBanner'; // Import Cookie Banner
import Cookies from 'js-cookie';
import Link from 'next/link'; // Import Link from Next.js

export default function RootLayout({ children }: { children: ReactNode }) {
  // Add Google Analytics tracking only if the user has accepted cookies
  useEffect(() => {
    const hasConsent = Cookies.get('cookieConsent');
  
    if (hasConsent === 'accepted') {
      (function (i: any, s: any, o: string, g: string, r: string, a: HTMLScriptElement | null, m: HTMLElement | null) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date().getTime();
        
        a = s.createElement(o) as HTMLScriptElement; // Cast as HTMLScriptElement
        m = s.getElementsByTagName(o)[0] as HTMLElement;
        if (m && m.parentNode) {
          m.parentNode.insertBefore(a, m);
        }
        a.async = true; // Now this works correctly
        a.src = g;
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga', null, null);
  
      (window as any).ga('create', 'G-BPH314L1S0', 'auto');
      (window as any).ga('send', 'pageview');
    }
  }, []);
  
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Netonline Media - AI-powered business solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Isaiah Bizabani" />
        <meta name="keywords" content="AI-powered solutions London, Custom AI solutions UK, AI business automation, Generative AI London, AI content creation UK" />

        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Netonline Media",
              "description": "AI-powered business solutions, including AI chatbots, content creation, and generative AI solutions in London, UK.",
              "url": "https://netonlinemedia.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7 Harrow Close",
                "addressLocality": "Chessington",
                "addressRegion": "Surrey",
                "postalCode": "KT9 2HR",
                "addressCountry": "UK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+442037293305",
                "contactType": "Sales",
                "email": "info@netonlinemedia.com"
              }
            }),
          }}
        />
        <title>Netonline Media | AI Solutions</title>
      </head>
      <body className="bg-lightGrey text-darkGrey">
        {/* Navbar */}
        <NavBar />

        {/* Page-specific content will go here */}
        <main>{children}</main>

        {/* Cookie Banner */}
        <CookieBanner />

        {/* Footer */}
        <footer className="bg-darkGrey text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div className="text-center md:text-left mb-4">
              <h3 className="text-2xl font-bold mb-2">Netonline Media</h3>
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
                <li><Link href="/cookies" className="text-gray-400 hover:text-white">Cookies Policy</Link></li>
                <li><Link href="/gdpr-privacy" className="text-gray-400 hover:text-white">GDPR Privacy Statement</Link></li>
                <li><Link href="/ai-usage" className="text-gray-400 hover:text-white">AI Usage Statement</Link></li>
                <li><Link href="/terms-and-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
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
