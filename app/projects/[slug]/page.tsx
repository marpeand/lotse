import { allProjects } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxRenderer } from "@/app/components/Mdx";
import type { Metadata } from "next";
import { CONFIG } from "@/blog.config";

function findProject(slug: string) {
  return allProjects.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const project = findProject(params.slug);
  if (!project) return undefined;

  return {
    title: project.title,
    openGraph: {
      title: project.title,
      type: "article",
      url: `${CONFIG.baseURL}/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
    },
  };
}

export default function ProjectPage({ params }) {
  const project = findProject(params.slug);

  if (!project) return notFound();

  return (
    <section>
      <span className="font-medium text-sm text-gray-600">Project</span>
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <article className="mt-10 prose prose-invert">
        <MdxRenderer source={project.body.code} />
      </article>
    </section>
  );
}
