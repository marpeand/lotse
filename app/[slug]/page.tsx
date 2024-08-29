import { allPosts } from "@/.contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MdxRenderer } from "../components/Mdx";
import { format } from "date-fns";
import CONFIG from "@/blog.config";
import Link from "next/link";

function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = getPostBySlug(params.slug);

  if (!post) return undefined;

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

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const href = `https://x.com/intent/tweet?text=${post.title}&url=${
    CONFIG.baseURL + post.url
  }`;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-1">{post.title}</h1>
      <div className="flex space-x-2 text-gray">
        <span>{format(new Date(post.date), "dd/MM/yy")}</span>
        <span className="font-bold">·</span>
        <span>{post.readingTime.text}</span>
      </div>
      <article className="my-10 prose prose-invert">
        <MdxRenderer source={post.body.code} />
      </article>
      <div className="text-[#545454] tracking-wider">
        <div className="space-x-1">
          <span className="font-light">&gt; </span>
          <span>share post on</span>
          <a
            href={href}
            target="_blank"
            className="text-white/80 hover:underline hover:text-white/100"
          >
            X(twitter)
          </a>
        </div>
        <div className="space-x-1">
          <span className="font-light">&gt; </span>
          <Link
            href="/"
            className="text-white/80  hover:underline hover:text-white/100"
          >
            cd ..
          </Link>
        </div>
      </div>
    </section>
  );
}
