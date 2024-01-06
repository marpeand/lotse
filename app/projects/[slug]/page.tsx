import { allProjects } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxRenderer } from "@/app/components/Mdx";

import type { Metadata } from "next";
import CONFIG from "@/blog.config";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const project = allProjects.find((post) => post.slug === params.slug);

  if (!project) {
    return;
  }
  const { title, slug } = project;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      url: `${CONFIG.baseURL}/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  };
}

export default function Post({ params }) {
  const project = allProjects.find((post) => post.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <article className="mt-10 prose prose-invert">
        <MdxRenderer source={project.body.code} />
      </article>
    </section>
  );
}
