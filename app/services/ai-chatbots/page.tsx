'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AIChatbots() {
  return (
    <>
      {/* Head Metadata and Schema Markup */}
      <meta name="description" content="Discover AI-powered chatbots from Netonline Media that transform customer service with 24/7 support, fast response times, and efficiency." />
      <meta name="keywords" content="AI Chatbots, LLM-Based Chatbots, AI-powered chatbots, 24/7 chatbot support, automated customer service, intelligent chatbots, conversational AI, chatbot UK, chatbot London" />
      <meta name="author" content="Isaiah Bizabani" />
      <title>AI-Powered Chatbots | Netonline Media</title>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI-Powered Chatbots",
            "provider": {
              "@type": "Organization",
              "name": "Netonline Media",
              "url": "https://netonlinemedia.com",
            },
            "description": "Transform your customer service with LLM-based AI-powered chatbots, offering 24/7 intelligent support.",
            "areaServed": "UK",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "price": "Contact for pricing",
              "eligibleRegion": {
                "@type": "Place",
                "name": "London",
              },
            },
          }),
        }}
      />

      <section className="bg-lightGrey py-16 px-6">
        {/* Hero Section */}
        <div
          className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/ai-chatbots-hero.jpg')" }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
            <h1 className="text-6xl font-bold text-white text-center mb-4 animate-fadeIn">
              LLM-Based AI Chatbots
            </h1>
            <p className="text-xl text-white text-center mb-8 animate-slideIn">
              Transform your customer service with intelligent, AI-powered chatbots.
            </p>
            <Link
              href="/qualifying-form"
              className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 animate-bounce"
            >
              Get Started with AI Chatbots
            </Link>
          </div>
        </div>

        {/* Service Description Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Enhance your customer service experience with{' '}
              <Link href="/services/ai-chatbots" className="text-primaryRed hover:underline">
                LLM-based AI chatbots
              </Link>
              . Our chatbots, powered by large language models (LLMs), can understand and respond to user queries in a natural and engaging way. Whether it&apos;s answering common questions, helping customers navigate your services, or providing support, our chatbots ensure quick, accurate, and context-aware responses.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              AI-powered chatbots operate 24/7, ensuring your customers always get the help they need. By streamlining communication, you can reduce response times and improve satisfaction without adding more human resources.{' '}
              <Link href="/services/ai-personalization" className="text-primaryRed hover:underline">
                Explore how AI personalization
              </Link>{' '}
              can further optimize customer interactions.
            </p>
            <Link
              href="/qualifying-form"
              className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 mt-4"
            >
              Learn More About AI Chatbots
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/ai-chatbots.jpg"
              alt="AI-Powered Chatbots"
              width={600}
              height={400}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-darkGrey mb-8">
              Why Choose AI Chatbots?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-lightGrey p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-darkGrey">24/7 Support</h3>
                <p className="text-gray-700">
                  Provide round-the-clock assistance to your customers without the need for extra human resources.{' '}
                  <Link href="/services/custom-ai" className="text-primaryRed hover:underline">
                    Discover our custom AI solutions
                  </Link>{' '}
                  for even greater automation.
                </p>
              </div>
              <div className="bg-lightGrey p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-darkGrey">
                  Fast &amp; Efficient
                </h3>
                <p className="text-gray-700">
                  Reduce wait times and improve customer satisfaction with instant responses from intelligent chatbots.
                </p>
              </div>
              <div className="bg-lightGrey p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-darkGrey">Cost Effective</h3>
                <p className="text-gray-700">
                  Automate customer support and reduce operational costs by leveraging AI technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-darkGrey py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Client Success Stories</h2>
            <div className="text-lg text-white max-w-2xl mx-auto italic mb-6">
              &quot;Netonline Media&apos;s AI chatbots transformed our customer service. Our response times dropped drastically, and customer satisfaction has never been higher!&quot;
            </div>
            <p className="text-lg text-white font-semibold">
              Sarah Wilson, Head of Customer Support, Access Finance
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
