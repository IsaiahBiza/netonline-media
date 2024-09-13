import Link from 'next/link';
import { getBlogPosts } from '../../lib/posts'; // Adjusted import path for posts
import generateRSSFeed from '../../lib/generateRSSFeed'; // Adjusted import path for RSS feed generation

type Post = {
  slug: string;
  title: string;
  date: string; 
  snippet: string;
};

export default function Blog() {
  const posts: Post[] = getBlogPosts() || []; // Fetch blog posts

  // Optionally call the RSS feed generation function when the blog page is built
  generateRSSFeed();

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-10">Net Online Media Blog</h1>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 py-12 px-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="border rounded-lg p-10 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-4 text-darkGrey hover:text-primaryRed transition duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-6">
                  {post.snippet}
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
