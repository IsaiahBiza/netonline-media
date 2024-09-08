"use client";
import Link from "next/link";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4"> {/* Added px-4 for padding */}
    
    {/* Left column (text) */}
    <div className="pl-4"> {/* Added pl-4 for additional left padding */}
      <h2 className="text-4xl font-bold text-darkGrey mb-8">
        Why Choose Netonline Media?
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        At <strong>Netonline Media</strong>, we combine over a decade of experience in AI-powered solutions...
      </p>
      <p className="text-lg text-gray-700 mb-6">
        With offices in <strong>Chessington, London, Surrey</strong>, we have a proven track record...
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Partner with us to take the next step in your digital transformation journey...
      </p>

      {/* Call to Action */}
      <Link
        href="/about"
        className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300 mt-4"
      >
        Learn More About Us
      </Link>
    </div>

    {/* Right column (image/illustration) */}
    <div className="relative">
      <Image
        src="/images/ai-solutions.jpg" 
        alt="AI Solutions"
        width={500}
        height={400}
        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</section>

  );
}
