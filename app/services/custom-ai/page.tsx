'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function CustomGenerativeAI() {
  return (
    <>
      <meta
        name="description"
        content="Netonline Media offers tailored generative AI solutions designed to meet specific business needs. Automate workflows and scale efficiently with custom AI models."
      />
      <meta
        name="keywords"
        content="Custom AI solutions, generative AI, AI automation, AI content generation, AI business solutions, UK AI solutions, AI for businesses"
      />
      <meta name="author" content="Isaiah Bizabani" />
      <title>Custom Generative AI Solutions | Netonline Media</title>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Custom Generative AI Solutions',
            provider: {
              '@type': 'Organization',
              name: 'Netonline Media',
              url: 'https://netonlinemedia.com',
            },
            description:
              'Tailored AI solutions that automate and scale your business operations.',
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
          style={{ backgroundImage: "url('/images/custom-ai-hero.jpg')" }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
            <h1 className="text-6xl font-bold text-white text-center mb-4 animate-fadeIn">
              Custom Generative AI Solutions
            </h1>
            <p className="text-xl text-white text-center mb-8 animate-slideIn">
              Tailored AI solutions that automate and scale your business.
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
              <Link
                href="/services/custom-ai"
                className="text-primaryRed hover:underline"
              >
                custom generative AI solutions
              </Link>{' '}
              are designed to meet your business needs. Whether you&apos;re looking to automate workflows or generate creative content, our AI models deliver measurable results. From natural language processing to image generation, we build scalable and flexible AI systems that enhance your business capabilities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With our generative AI, you can unlock the potential of automation and scale like never before. Let us help you integrate cutting-edge AI into your business processes for optimal efficiency and growth. Learn how our{' '}
              <Link href="/services/ai-content" className="text-primaryRed hover:underline">
                AI-powered content creation
              </Link>{' '}
              can further streamline your business.
            </p>
            <Link
              href="/qualifying-form"
              className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 mt-4"
            >
              Schedule a Consultation
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/custom-ai.jpg"
              alt="Custom Generative AI Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-darkGrey py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">What Our Clients Say</h2>
            <div className="text-lg text-white max-w-2xl mx-auto italic mb-6">
              &quot;Netonline Media provided a custom AI solution that transformed our content strategy. The efficiency and quality of their AI model exceeded our expectations.&quot;
            </div>
            <p className="text-lg text-white font-semibold">
              Rebecca Arkle, Paragon Housing
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
