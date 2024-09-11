import Link from 'next/link';

export default function ServicesHeroSection() {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-wandlePink via-wandlePurple to-wandleLightBlue">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Transform Your Business with Generative AI
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg">
        AI-powered content creation, personalization, and automation to drive your business forward.
      </p>
      <Link href="/contact">
        <div className="mt-8 bg-primaryRed text-white py-4 px-8 rounded-lg text-lg hover:bg-red-600 transition duration-300">
          Learn More About Our Services
        </div>
      </Link>
    </section>
  );
}

