export default function Testimonials() {
  return (
    <section className="bg-lightGrey py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-darkGrey mb-8">Client Testimonials</h2>

        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <p className="text-lg text-gray-700 mb-4">
            &quot;We partnered with Netonline Media for AI-driven content creation, and the results have been outstanding. Our engagement rates have skyrocketed, and we couldn&apos;t be happier with the service.&quot;
          </p>
          <p className="font-semibold text-darkGrey">Ed Bracey, ATOZ Procurement Services</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">
            &quot;Netonline Media transformed how we interact with customers. Their AI-powered chatbots are a game changer for our business.&quot;
          </p>
          <p className="font-semibold text-darkGrey">Richard Stocks, Access Forex</p>
        </div>

      </div>
    </section>
  );
}
