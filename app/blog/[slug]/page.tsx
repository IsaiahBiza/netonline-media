import { getPostData } from 'lib/posts';
import Link from 'next/link';

type PostProps = {
  params: {
    slug: string;
  };
};

// Array of blog post slugs for linking
const blogPostSlugs = [
  'AI-and-Hyper-Personalization-in-Financial-Services',
  'AI-Driven-Automation-Services',
  'AI-Generated-Marketing-Copy',
  'AI-Powered-Blog-Writing-Services',
  'AI-Powered-Chatbots-for-Businesses-in-the-Uk',
  'AI-Powered-Chatbots-for-Businesses',
  'AI-Powered-Chatbots-UK',
  'AI-Powered-Customer-Journeys',
  'Custom-AI-Solutions',
];

export default async function Post({ params }: PostProps) {
  const { title, date, contentHtml } = getPostData(params.slug); // Fetch post data

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
}
