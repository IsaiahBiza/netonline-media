'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the cookie consent has been accepted
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowBanner(true); // Show the banner if no consent
    }
  }, []);

  const acceptCookies = () => {
    // Set the cookie consent
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setShowBanner(false); // Hide the banner
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-darkGrey text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p>
          We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.
        </p>
        <button
          onClick={acceptCookies}
          className="ml-4 bg-primaryRed text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
