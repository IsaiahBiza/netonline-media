import Link from 'next/link';
import { getBlogPosts } from '../../lib/posts'; // Correct import path

type Post = {
  slug: string;
  title: string;
  date: string;
  snippet: string;
};

export default function Blog() {
  const posts: Post[] = getBlogPosts() || []; // Ensure posts is always typed as an array

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-10">Net Online Media Blog</h1>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 py-12 px-8"> {/* Changed to 1 column */}
          {posts.map((post) => (
            <div
              key={post.slug}
              className="border rounded-lg p-10 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" // Added flexbox and text-center
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-4 text-darkGrey hover:text-primaryRed transition duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-6">
                  {post.snippet} {/* Short description */}
                </p>
                <p className="text-primaryRed font-bold hover:underline">Read More</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No blog posts available at the moment.</p>
      )}
    </div>
  );
}
