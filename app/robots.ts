import CONFIG from "@/blog.config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CONFIG.baseURL}/sitemap.xml`,
    host: CONFIG.baseURL,
  };
}
