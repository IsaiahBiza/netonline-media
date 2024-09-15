// app/about/page.tsx (Server Component, no 'use client')

// Metadata for the About Us page
export const metadata = {
  title: 'About Netonline Media | AI Solutions for Business',
  description:
    'Netonline Media provides AI-powered solutions to drive business innovation and success. Learn more about our expertise and mission.',
  keywords:
    'AI solutions, business AI, AI-powered services, AI content creation, personalized AI',
  author: 'Isaiah Bizabani',
};

import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="bg-lightGrey py-16 px-6">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-us-hero.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-6xl font-bold text-white text-center mb-4 animate-fadeIn">
            About Netonline Media
          </h1>
          <p className="text-xl text-white text-center mb-8 animate-slideIn">
            Driving innovation with AI-powered solutions to help businesses thrive.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-darkGrey mb-12">
          Who We Are
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Netonline Media is a pioneering AI solutions provider dedicated to driving digital transformation for businesses. Founded with the vision of leveraging AI to solve real-world problems, we empower organizations to unlock the potential of AI-driven technology. From AI-powered content generation to personalized customer experiences, we offer tailored solutions that align with business goals.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With over a decade of experience in the AI industry, our expert team includes AI engineers, data scientists, and digital strategists who are committed to delivering cutting-edge, customized solutions. Our approach is rooted in deep collaboration, ensuring that each AI implementation aligns with the specific needs and challenges of our clients.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We work with businesses across various industries, helping them optimize workflows, increase customer engagement, and foster innovation. Whether you&apos;re looking to improve customer service through AI chatbots or personalize your marketing efforts with AI-driven insights, Netonline Media is equipped to guide you every step of the way.
            </p>
            {/* Call to Action */}
            <Link
              href="/qualifying-form"
              className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 mt-4"
            >
              Get Started with AI Solutions
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/about-us.jpg"
              alt="About Netonline Media"
              width={600}
              height={400}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-darkGrey mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            At Netonline Media, our mission is to empower businesses with innovative AI solutions that drive efficiency, enhance customer engagement, and unlock new opportunities.
          </p>
          {/* Call to Action */}
          <Link
            href="/contact"
            className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-lightGrey py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-darkGrey mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-darkGrey">Innovation</h3>
              <p className="text-gray-700">
                Constantly pushing the boundaries of technology to deliver forward-thinking AI solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-darkGrey">Collaboration</h3>
              <p className="text-gray-700">
                Working closely with our clients to create tailored solutions that fit their specific business needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-darkGrey">Excellence</h3>
              <p className="text-gray-700">
                Striving for excellence in every project, from concept to execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
