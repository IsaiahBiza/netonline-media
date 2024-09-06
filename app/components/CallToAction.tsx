import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-primaryRed py-16 px-6 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">Ready to See How AI Can Transform Your Business?</h2>
        <p className="mt-4 text-lg">
          Book a free consultation today and let&apos;s explore the possibilities.
        </p>
        <Link href="/contact" className="mt-8 inline-block bg-white text-primaryRed py-4 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300">
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}

