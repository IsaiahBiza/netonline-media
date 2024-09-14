// app/page.tsx (Server Component)

import Introduction from "./components/Introduction";
import ServicesOverview from "./components/ServicesOverview";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";

// Server-side metadata export
export const metadata = {
  title: 'Netonline Media | AI Business Solutions',
  description: 'Netonline Media offers AI-powered business solutions including custom AI models, content creation, chatbots, and personalization services.',
  keywords: 'AI solutions, AI business services, generative AI, content creation, AI chatbots, AI personalization',
  openGraph: {
    type: 'website',
    url: 'https://netonlinemedia.com',
    title: 'Netonline Media | AI Business Solutions',
    description: 'Providing AI-powered business solutions for growth and innovation.',
  },
  ldJson: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Netonline Media",
    url: "https://netonlinemedia.com",
    description: "Providing AI-powered business solutions for growth and innovation.",
    sameAs: [
      "https://www.linkedin.com/company/netonlinemedia",
      "https://twitter.com/netonlinemedia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44 20 3729 3305",
      contactType: "Customer Service",
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Introduction Section */}
      <Introduction />

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}
