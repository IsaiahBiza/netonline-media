import { getPostData, getBlogPosts } from '../../../lib/posts'; // Import both getPostData and getBlogPosts
import Link from 'next/link';

type PostProps = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: PostProps) {
  const { title, date, contentHtml } = getPostData(params.slug); // Fetch current post data
  const posts = getBlogPosts(); // Fetch all blog posts

  return (
    <div className="container mx-auto py-8 px-6 flex justify-center"> {/* Flex and justify-center to center content */}
      <div className="w-full max-w-2xl"> {/* Width limited to max-w-2xl to center and limit content */}
        <h1 className="text-3xl font-bold mb-2">{title}</h1> 
        <p className="text-sm text-gray-500 mb-6 text-center">{date}</p>
        
        <div
          className="prose prose-lg mb-10" // Text justification for normal paragraph layout
          dangerouslySetInnerHTML={{ __html: contentHtml }} // Safely render HTML content
        />

        {/* Display other blog posts */}
        <h2 className="text-xl font-bold mt-8 mb-4">Other Blog Posts</h2>
        <ul className="list-none space-y-2">
          {posts
            .filter((post) => post.slug !== params.slug) // Exclude the current post from the list
            .map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-primaryRed hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
//run build and commit
