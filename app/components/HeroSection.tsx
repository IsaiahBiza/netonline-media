import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 animated-gradient-bg">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        AI Solutions for the Future of Business
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg">
        Automate, innovate, and accelerate your business growth with cutting-edge AI-powered solutions.
      </p>
      <Link href="/qualifying-form" className="mt-8 bg-primaryRed text-white py-4 px-8 rounded-lg text-lg hover:bg-red-600 transition duration-300">
        Get Started Now
      </Link>
    </section>
  );
}
