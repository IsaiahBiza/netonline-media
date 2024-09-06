import Link from 'next/link';
import Head from 'next/head';

// Services Hero Section
function ServicesHeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-wandlePink via-wandlePurple to-wandleLightBlue">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Transform Your Business with Generative AI
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg">
        AI-powered content creation, personalization, and automation to drive your business forward.
      </p>
      <Link href="/contact" className="mt-8 bg-primaryRed text-white py-4 px-8 rounded-lg text-lg hover:bg-red-600 transition duration-300">
        Learn More About Our Services
      </Link>
    </section>
  );
}

// Main Services Page
export default function Services() {
  return (
    <>
      <Head>
        <meta name="description" content="Explore Netonline Media's AI services, including custom generative AI solutions, AI-powered content creation, chatbots, and personalization." />
        <meta name="keywords" content="AI services, custom generative AI, AI content creation, LLM chatbots, AI personalization, business AI solutions" />
        <meta name="author" content="Isaiah Bizabani" />
        <title>AI Services | Netonline Media</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Solutions",
              "provider": {
                "@type": "Organization",
                "name": "Netonline Media",
                "url": "https://netonlinemedia.com"
              },
              "description": "AI-powered content creation, personalization, and automation to drive business growth.",
              "areaServed": "UK"
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Services Overview */}
      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-darkGrey text-center mb-12">Our AI Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Custom Generative AI Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-darkGrey mb-4">Custom Generative AI Solutions</h3>
            <p className="text-gray-600 mb-6">
              Discover our <Link href="/services/custom-ai" className="text-primaryRed hover:underline">Custom Generative AI Solutions</Link> to automate workflows and scale business operations efficiently.
            </p>
            <Link href="/services/custom-ai" className="inline-block bg-primaryRed text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>

          {/* AI-Powered Content Creation */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-darkGrey mb-4">AI-Powered Content Creation</h3>
            <p className="text-gray-600 mb-6">
              Scale content production seamlessly with our <Link href="/services/ai-content" className="text-primaryRed hover:underline">AI-powered Content Creation</Link>, designed to maintain your brand’s voice.
            </p>
            <Link href="/services/ai-content" className="inline-block bg-primaryRed text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>

          {/* LLM-Based Chatbots */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-darkGrey mb-4">LLM-Based Chatbots</h3>
            <p className="text-gray-600 mb-6">
              Elevate customer service with <Link href="/services/ai-chatbots" className="text-primaryRed hover:underline">LLM-based Chatbots</Link> that provide natural language support 24/7.
            </p>
            <Link href="/services/ai-chatbots" className="inline-block bg-primaryRed text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>

          {/* AI-Driven Personalization */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-darkGrey mb-4">AI-Driven Personalization</h3>
            <p className="text-gray-600 mb-6">
              Deliver personalized customer experiences with <Link href="/services/ai-personalization" className="text-primaryRed hover:underline">AI-driven Personalization</Link> tailored to user preferences in real-time.
            </p>
            <Link href="/services/ai-personalization" className="inline-block bg-primaryRed text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
