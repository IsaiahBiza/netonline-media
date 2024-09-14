// app/services/page.tsx (Server Component)

// Import components
import ServicesHeroSection from '../components/ServicesHeroSection'; // Ensure path is correct
import ServicesOverview from '../components/ServicesOverview'; // Ensure path is correct

// Server-side metadata export
export const metadata = {
  title: 'AI Services | Netonline Media',
  description: 'Explore Netonline Media\'s AI services, including custom generative AI solutions, AI-powered content creation, chatbots, and personalization.',
  keywords: 'AI services, custom generative AI, AI content creation, LLM chatbots, AI personalization, business AI solutions',
  openGraph: {
    type: 'website',
    url: 'https://netonlinemedia.com/services',
    title: 'AI Services | Netonline Media',
    description: 'Explore Netonline Media\'s AI services, including custom generative AI solutions, AI-powered content creation, chatbots, and personalization.',
  },
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full">
        <ServicesHeroSection />
      </div>

      {/* Services Overview Section */}
      <ServicesOverview />
    </>
  );
}
