// app/ai-usage-statement/page.tsx (Server Component)

export const metadata = {
  title: 'AI Usage Statement | Netonline Media',
  description: 'Netonline Media\'s AI Usage Statement. Learn about how we use AI technology ethically and responsibly to improve business efficiency while maintaining transparency and privacy.',
  keywords: 'AI usage, ethical AI, AI privacy, responsible AI, generative AI, AI content creation, AI chatbots',
  openGraph: {
    type: 'website',
    url: 'https://netonlinemedia.com/ai-usage-statement',
    title: 'AI Usage Statement | Netonline Media',
    description: 'Netonline Media\'s AI Usage Statement. Learn about how we use AI technology ethically and responsibly to improve business efficiency while maintaining transparency and privacy.',
  },
};

export default function AiUsageStatement() {
  return (
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
  );
}
