import { Feed } from 'rss';
import fs from 'fs';
import path from 'path';

export default function generateRSS(req, res) {
  const feed = new Feed({
    title: 'Net Online Media Blog',
    description: 'AI-Powered Business Solutions',
    id: 'https://netonlinemedia.com/',
    link: 'https://netonlinemedia.com/',
    language: 'en',
    copyright: '2024 Net Online Media',
  });

  // Example posts (replace with actual blog posts from your CMS or Markdown files)
  const posts = [
    {
      title: 'AI Solutions for Business Growth',
      id: 'https://netonlinemedia.com/blog/ai-solutions-business',
      link: 'https://netonlinemedia.com/blog/ai-solutions-business',
      description: 'Explore how AI can drive business growth.',
      date: new Date(),
    },
  ];

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.id,
      link: post.link,
      description: post.description,
      date: post.date,
    });
  });

  const xml = feed.rss2();
  const filePath = path.join(process.cwd(), 'public', 'rss.xml');
  fs.writeFileSync(filePath, xml);
  
  res.status(200).send({ message: 'RSS feed generated successfully!' });
}
