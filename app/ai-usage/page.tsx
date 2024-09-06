'use client';

import Head from 'next/head';

export default function AiUsageStatement() {
  return (
    <>
      <Head>
        <meta name="description" content="Netonline Media's AI Usage Statement. Learn about how we use AI technology ethically and responsibly to improve business efficiency while maintaining transparency and privacy." />
        <meta name="keywords" content="AI usage, ethical AI, AI privacy, responsible AI, generative AI, AI content creation, AI chatbots" />
        <meta name="author" content="Isaiah Bizabani" />
        <title>AI Usage Statement | Netonline Media</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AI Usage Statement",
              "description": "Netonline Media's AI Usage Statement. Learn how we use AI technology ethically and responsibly while ensuring privacy and fairness.",
              "url": "https://netonlinemedia.com/ai-usage-statement",
            }),
          }}
        />
      </Head>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-0">
          <h1 className="text-4xl font-bold text-darkGrey mb-8">AI Usage Statement</h1>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Netonline Media is committed to the ethical and responsible use of AI technology. Our AI services are designed to improve business efficiency while ensuring transparency, fairness, and privacy.
            </p>
            <h2 className="text-2xl font-semibold">How We Use AI</h2>
            <p>
              We use AI to deliver custom generative AI solutions, AI-powered content creation, and LLM-based chatbots. Our AI solutions are tailored to meet your business needs.
            </p>
            <h2 className="text-2xl font-semibold">Ethical AI Practices</h2>
            <p>
              We prioritize fairness, data privacy, and transparency in all of our AI services. Your data is processed securely, and we comply with all data protection regulations.
            </p>
          </div>
          {/* CTA Button */}
          <div className="text-center mt-8">
            <a href="/qualifying-form" className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition">
              Learn More About Our AI Solutions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
