import fs from 'fs';
import path from 'path';
import RSS from 'rss'; // Ensure you have this installed in your package.json
import { getBlogPosts } from './posts'; // Assuming this is your posts fetching function

// Generate RSS Feed function
export default function generateRSSFeed() {
  const feed = new RSS({
    title: 'Net Online Media Blog',
    description: 'Latest blog posts from Net Online Media',
    feed_url: 'https://netonlinemedia.com/rss.xml',
    site_url: 'https://netonlinemedia.com',
  });

  const posts = getBlogPosts(); // Fetch posts from the blog

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.snippet || '',
      url: `https://netonlinemedia.com/blog/${post.slug}`,
      date: post.date,
    });
  });

  const rssOutput = feed.xml({ indent: true });
  const rssPath = path.join(process.cwd(), 'public', 'rss.xml');

  // Write the RSS feed to public/rss.xml
  fs.writeFileSync(rssPath, rssOutput);
}
