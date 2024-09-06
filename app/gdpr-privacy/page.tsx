export default function GdprPrivacy() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-0">
        <h1 className="text-4xl font-bold text-darkGrey mb-8">GDPR Privacy Statement</h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            At Netonline Media, we respect your privacy and are committed to protecting your personal data. This GDPR Privacy Statement explains how we collect, process, and store your data in compliance with the General Data Protection Regulation (GDPR).
          </p>
          <h2 className="text-2xl font-semibold">Data We Collect</h2>
          <p>
            We collect personal information that you provide when using our website, including your name, email address, business information, and other personal data submitted through forms.
          </p>
          <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
          <p>
            We use your data to communicate with you, personalize your experience, and send marketing communications with your consent.
          </p>
          <h2 className="text-2xl font-semibold">Your Data Rights</h2>
          <p>
            You have the right to access, rectify, or erase your personal data. Contact us at <a href="mailto:info@netonlinemedia.com" className="text-primaryRed underline">info@netonlinemedia.com</a> to exercise your rights.
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
