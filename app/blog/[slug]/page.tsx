import { getPostData } from 'lib/posts';
import Link from 'next/link';

type PostProps = {
  params: {
    slug: string;
  };
};

// Array of blog post slugs for linking
const blogPostSlugs = [
  'ai-and-hyper-personalization-in-financial-services',
  'ai-driven-automation-services',
  'ai-generated-marketing-copy',
  'ai-powered-blog-writing-services',
  'ai-powered-chatbots-for-businesses-in-the-uk',
  'ai-powered-chatbots-for-businesses',
  'ai-powered-chatbots-uk',
  'ai-powered-customer-journeys',
  'custom-ai-solutions',
];

export default async function Post({ params }: PostProps) {
  try {
    // Fetch post data - await if it's an async function
    const { title, date, contentHtml } = await getPostData(params.slug);

    return (
      <div className="max-w-screen-lg mx-auto py-12 px-6">
        {/* Main Content */}
        <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
        <p className="text-sm text-gray-500 mb-8 text-center">{date}</p>
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: contentHtml }} // Safely render HTML content
        />

        {/* Links to Other Posts */}
        <div className="mt-16 text-center font-semibold">
          <h2 className="text-3xl font-semibold mb-8">Other Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 max-w-screen-md mx-auto">
            {blogPostSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="block p-6 bg-white border rounded-lg shadow-lg hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                <h3 className="text-lg font-medium text-primaryRed">
                  {slug.replace(/-/g, ' ')} {/* Make the title readable */}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post data:", error); // Log the error

    // Display a user-friendly error message
    return <div className="text-center py-20">Error loading post. Please try again later.</div>;
  }
}
