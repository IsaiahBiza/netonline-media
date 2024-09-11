import Introduction from "./components/Introduction";
import ServicesOverview from "./components/ServicesOverview";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import Head from "next/head"; // Correctly import Head

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Netonline Media offers AI-powered business solutions including custom AI models, content creation, chatbots, and personalization services."
        />
        <meta
          name="keywords"
          content="AI solutions, AI business services, generative AI, content creation, AI chatbots, AI personalization"
        />
        <meta name="author" content="Isaiah Bizabani" />
        <title>Netonline Media | AI Business Solutions</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Netonline Media",
              url: "https://netonlinemedia.com",
              description:
                "Providing AI-powered business solutions for growth and innovation.",
              sameAs: [
                "https://www.linkedin.com/company/netonlinemedia",
                "https://twitter.com/netonlinemedia",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44 20 3729 3305",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </Head>
      <div>
        {/* Remove the Hero Section from here */}
        
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
    </>
  );
}
