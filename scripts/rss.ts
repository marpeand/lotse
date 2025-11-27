import { writeFileSync } from "fs";
import { Feed } from "feed";
import path from "path";

import { allPosts } from "../.contentlayer/generated/index.mjs";
import { title, description, baseURL } from "../blog.config.js";

async function generateRssFeed() {
  const site_url = baseURL;

  const feedOptions = {
    title: title,
    description: description,
    id: site_url,
    link: site_url,
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${title}`,
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
