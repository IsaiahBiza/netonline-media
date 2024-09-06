'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AIPersonalization() {
  return (
    <>
      <meta
        name="description"
        content="Deliver personalized experiences with Netonline Media&apos;s AI-driven personalization services. Tailor each customer&apos;s experience for increased engagement and conversions."
      />
      <meta
        name="keywords"
        content="AI personalization, AI-driven experiences, personalized product recommendations, AI in marketing, AI customer engagement, real-time personalization, UK AI solutions, AI personalization tools"
      />
      <meta name="author" content="Isaiah Bizabani" />
      <title>AI-Driven Personalization | Netonline Media</title>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'AI-Driven Personalization',
            provider: {
              '@type': 'Organization',
              name: 'Netonline Media',
              url: 'https://netonlinemedia.com',
            },
            description:
              'Create tailored AI-driven customer experiences that enhance engagement and drive conversions.',
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
          style={{ backgroundImage: "url('/images/ai-personalization-hero.jpg')" }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
            <h1 className="text-6xl font-bold text-white text-center mb-4 animate-fadeIn">
              AI-Driven Personalization
            </h1>
            <p className="text-xl text-white text-center mb-8 animate-slideIn">
              Deliver personalized experiences at scale with AI-driven solutions.
            </p>
            <Link
              href="/qualifying-form"
              className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 animate-bounce"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Service Description Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Our{' '}
              <Link href="/services/ai-personalization" className="text-primaryRed hover:underline">
                AI-driven personalization services
              </Link>{' '}
              help you create tailored experiences for each customer, whether it&apos;s personalized product recommendations, dynamic pricing, or curated marketing content. Using real-time data, our AI models ensure every interaction is meaningful and relevant.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              By integrating{' '}
              <Link href="/services/custom-ai" className="text-primaryRed hover:underline">
                AI
              </Link>{' '}
              into your customer experience strategy, you can boost engagement, increase conversions, and drive long-term loyalty. Let us help you connect with your audience on a deeper level through tailored AI-driven experiences.
            </p>
            <Link
              href="/qualifying-form"
              className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 mt-4"
            >
              Learn More About AI Personalization
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/ai-personalization.jpg"
              alt="AI-Driven Personalization"
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
              Why Choose AI Personalization?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-lightGrey p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-darkGrey">
                  Real-Time Recommendations
                </h3>
                <p className="text-gray-700">
                  Deliver personalized product or content recommendations to each customer based on their behavior and preferences. Explore our{' '}
                  <Link href="/services/ai-chatbots" className="text-primaryRed hover:underline">
                    AI chatbots
                  </Link>{' '}
                  to further enhance customer service.
                </p>
              </div>
              <div className="bg-lightGrey p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-darkGrey">
                  Increased Engagement
                </h3>
                <p className="text-gray-700">
                  Enhance user engagement and satisfaction by delivering relevant and personalized experiences. Combine this with our{' '}
                  <Link href="/services/ai-content" className="text-primaryRed hover:underline">
                    AI-powered content creation
                  </Link>{' '}
                  for maximum impact.
                </p>
              </div>
              <div className="bg-lightGrey p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-darkGrey">Drive Conversions</h3>
                <p className="text-gray-700">
                  Use AI to target the right customer with the right message, leading to increased conversions and sales.
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
              &quot;Thanks to AI-driven personalization, we&apos;ve seen a significant increase in customer engagement. Netonline Media&apos;s solutions are a game-changer!&quot;
            </div>
            <p className="text-lg text-white font-semibold">
              Bammy Williams, Director and Chief Architect, Bloc Architects
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

