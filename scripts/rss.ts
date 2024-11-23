import { Feed } from "feed";
import { writeFileSync } from "fs";
import path from "path";
import { allPosts } from "../.contentlayer/generated/index.mjs";
import CONFIG from "../blog.config.js";

async function generateRssFeed() {
  const site_url = CONFIG.baseURL;

  const feedOptions = {
    title: CONFIG.title,
    description: CONFIG.descripcion,
    id: site_url,
    link: site_url,
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      CONFIG.title
    }`,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  const filteredPosts = allPosts.filter((post) => !post.draft);
  const currentPosts = filteredPosts.sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  currentPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/${post.slug}`,
      link: `${site_url}/${post.slug}`,
      date: new Date(post.date),
    });
  });

  const outputPath = path.join(process.cwd(), "public", "rss.xml");
  writeFileSync(outputPath, feed.rss2());
}

generateRssFeed();
