import { allPosts } from "@/.contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MdxRenderer } from "../components/Mdx";
import { format } from "date-fns";
import CONFIG from "@/blog.config";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, date: publishedTime, slug } = post;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      publishedTime,
      url: `${CONFIG.baseURL}/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  };
}
export default function Post({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-1">{post.title}</h1>
      <div className="flex space-x-2 text-gray">
        <span>
          {format(new Date(post.date), "dd/MM/yy")}
        </span>
        <span className="font-bold mx-2">·</span>
        <span>
          {post.readingTime.text}
        </span>
      </div>
      <article className="mt-10 prose prose-invert">
        <MdxRenderer source={post.body.code} />
      </article>
    </section>
  );
}
