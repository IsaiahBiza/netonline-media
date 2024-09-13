import { getPostData } from 'lib/posts'; // Correct import for getPostData
import Link from 'next/link';

type PostProps = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: PostProps) {
  const { title, date, contentHtml } = getPostData(params.slug); // Fetch post data

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-500 mb-8">{date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }} // Safely render HTML content
      />
    </div>
  );
}
