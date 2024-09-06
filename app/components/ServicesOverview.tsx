import Link from 'next/link';

export default function ServicesOverview() {
  return (
    <section className="bg-lightGrey py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-darkGrey mb-12">Our AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-darkGrey mb-4">Custom Generative AI Solutions</h3>
            <p className="text-gray-600 mb-6">
              Tailored AI models to meet your business&apos;s unique needs, whether you&apos;re looking to automate workflows, generate content, or develop advanced models.
            </p>
            <Link href="/services/custom-ai" className="inline-block bg-primaryRed text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-darkGrey mb-4">AI-Powered Content Creation</h3>
            <p className="text-gray-600 mb-6">
              Scale content production using AI-generated content. Perfect for blogs, social media, and more, all while maintaining brand voice.
            </p>
            <Link href="/services/ai-content" className="inline-block bg-primaryRed text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-darkGrey mb-4">LLM-Based Chatbots</h3>
            <p className="text-gray-600 mb-6">
              AI-powered chatbots for seamless customer service automation and engagement using natural language processing (NLP).
            </p>
            <Link href="/services/ai-chatbots" className="inline-block bg-primaryRed text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-darkGrey mb-4">AI-Driven Personalization</h3>
            <p className="text-gray-600 mb-6">
              Provide personalized experiences to your customers with real-time product recommendations and content.
            </p>
            <Link href="/services/ai-personalization" className="inline-block bg-primaryRed text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
