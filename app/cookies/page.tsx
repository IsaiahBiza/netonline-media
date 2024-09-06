'use client';
import Head from 'next/head';

export default function CookiesPolicy() {
  return (
    <>
      <Head>
        <meta name="description" content="Learn about Netonline Media's cookies policy and how we use cookies to enhance your user experience." />
        <meta name="keywords" content="cookies policy, Netonline Media, data collection, privacy, user experience" />
        <meta name="author" content="Isaiah Bizabani" />
        <title>Cookies Policy | Netonline Media</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Cookies Policy",
              "url": "https://netonlinemedia.com/cookies",
              "description": "Learn about Netonline Media's cookies policy and how we use cookies to enhance your user experience.",
            }),
          }}
        />
      </Head>

      <section className="bg-lightGrey py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-darkGrey mb-12">Cookies Policy</h1>
        <div className="container mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            At Netonline Media, we are committed to protecting your privacy. This Cookies Policy explains how we use cookies and similar technologies to enhance your experience on our website.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            By using our website, you consent to our use of cookies as described in this policy.
          </p>
          {/* Add other content related to the cookies policy here */}
        </div>
      </section>
    </>
  );
}

