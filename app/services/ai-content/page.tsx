'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AIPoweredContentCreation() {
  return (
    <>
      {/* Head Metadata and Schema Markup */}
      <meta
        name="description"
        content="Discover AI-powered content creation solutions from Netonline Media. Produce high-quality content at scale that matches your brand voice and engages your audience."
      />
      <meta
        name="keywords"
        content="AI content creation, AI-powered content, automated content production, content generation AI, brand consistency AI, AI content tools, content creation services London, content automation"
      />
      <meta name="author" content="Isaiah Bizabani" />
      <title>AI-Powered Content Creation | Netonline Media</title>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'AI-Powered Content Creation',
            provider: {
              '@type': 'Organization',
              name: 'Netonline Media',
              url: 'https://netonlinemedia.com',
            },
            description:
              'Scale your content production with AI-powered tools that ensure consistency and creativity across all platforms.',
            areaServed: 'UK',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'GBP',
              price: 'Contact for pricing',
              eligibleRegion: {
                '@type': 'Place',
                name: 'London',
              },
            },
          }),
        }}
      />

      <section className="bg-lightGrey py-16 px-6">
        {/* Hero Section */}
        <div
          className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/ai-content-hero.jpg')" }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
            <h1 className="text-6xl font-bold text-white text-center mb-4 animate-fadeIn">
              AI-Powered Content Creation
            </h1>
            <p className="text-xl text-white text-center mb-8 animate-slideIn">
              Scale content production using AI that matches your brand&apos;s
              voice and audience engagement.
            </p>
            <Link
              href="/qualifying-form"
              className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 animate-bounce"
            >
              Get Started with AI Content Creation
            </Link>
          </div>
        </div>

        {/* Service Description Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              With our{' '}
              <Link
                href="/services/custom-ai"
                className="text-primaryRed hover:underline"
              >
                AI-powered content creation services
              </Link>
              , you can produce high-quality content at scale while maintaining
              consistency and creativity. Whether it&apos;s blog posts, social
              media updates, or multimedia content, our AI models create
              content that aligns with your brand&apos;s voice and engages your
              audience.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Leverage AI to streamline your content production process. With
              automated content generation, you can focus on strategy while
              ensuring your digital presence stays active and engaging across
              platforms. Learn how{' '}
              <Link
                href="/services/ai-personalization"
                className="text-primaryRed hover:underline"
              >
                AI personalization
              </Link>{' '}
              can further enhance your customer engagement strategy.
            </p>
            <Link
              href="/qualifying-form"
              className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 mt-4"
            >
              Learn More About AI Content Creation
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/ai-content.jpg"
              alt="AI-Powered Content Creation"
              width={600}
              height={400}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-darkGrey py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Client Success Stories
            </h2>
            <div className="text-lg text-white max-w-2xl mx-auto italic mb-6">
              &quot;Netonline Media&apos;s AI content creation helped us scale
              our efforts by 10x while maintaining quality. A game-changer!&quot;
            </div>
            <p className="text-lg text-white font-semibold">
              Zondy Broxup, Associate at Atlantic Solicitors.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
