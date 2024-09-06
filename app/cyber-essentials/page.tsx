export default function CyberEssentials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-0">
        <h1 className="text-4xl font-bold text-darkGrey mb-8">Cyber Essentials</h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Netonline Media is proud to be Cyber Essentials certified, demonstrating our commitment to cybersecurity. This certification ensures that we have implemented best practices to safeguard your data and protect against cyber threats.
          </p>
          <h2 className="text-2xl font-semibold">Our Cybersecurity Measures Include:</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Firewalls and internet gateways.</li>
            <li>Secure configurations for hardware and software.</li>
            <li>Regular updates and patch management.</li>
            <li>Protection against malware.</li>
            <li>Control of user access.</li>
          </ul>
        </div>
        {/* CTA Button */}
        <div className="text-center mt-8">
          <a href="/contact" className="inline-block bg-primaryRed text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition">
            Learn More About Our Security Standards
          </a>
        </div>
      </div>
    </section>
  );
}
