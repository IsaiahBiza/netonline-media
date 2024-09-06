export default function TermsConditions() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-0">
        <h1 className="text-4xl font-bold text-darkGrey mb-8">Terms & Conditions</h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            These Terms and Conditions govern your use of the Netonline Media website and services. By using our website, you agree to comply with these terms.
          </p>
          <h2 className="text-2xl font-semibold">Use of Services</h2>
          <p>
            You agree to use our services for lawful purposes only. You may not use our services to distribute harmful or illegal content.
          </p>
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p>
            Netonline Media is not liable for any damages arising from your use of our website or services. We do not guarantee that our services will be uninterrupted or error-free.
          </p>
        </div>
        {/* CTA Button */}
        <div className="text-center mt-8">
          <a href="/contact" className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition">
            Contact Us for More Information
          </a>
        </div>
      </div>
    </section>
  );
}
