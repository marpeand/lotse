import { allPosts } from "@/.contentlayer/generated";
import CONFIG from "@/blog.config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${CONFIG.baseURL}/${post.slug}`,
    lastModified: post.date ?? new Date().toISOString(),
  }));

  const routes = ["", "/about", "/projects"].map((route) => ({
    url: `${CONFIG.baseURL}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
  }));

  return [...routes, ...posts];
}
