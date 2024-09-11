import Head from 'next/head';
import ServicesHeroSection from '../components/ServicesHeroSection'; // Ensure this path is correct
import ServicesOverview from '../components/ServicesOverview'; // Ensure this path is correct

// Main Services Page
export default function Services() {
  return (
    <>
      <Head>
        <meta name="description" content="Explore Netonline Media's AI services, including custom generative AI solutions, AI-powered content creation, chatbots, and personalization." />
        <meta name="keywords" content="AI services, custom generative AI, AI content creation, LLM chatbots, AI personalization, business AI solutions" />
        <meta name="author" content="Isaiah Bizabani" />
        <title>AI Services | Netonline Media</title>
      </Head>

      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Services Overview Section */}
      <ServicesOverview /> {/* This should import correctly now */}
    </>
  );
}
