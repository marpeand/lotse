import { allProjects } from "@/.contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my personal projects",
};

const Page = () => {
  return (
    <section className="mt-10">
      {allProjects.map((project) => (
        <Link className={"pb-4 flex"} href={project.url} key={project.slug}>
          <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis hover:underline">
            {project.title}
          </h1>
        </Link>
      ))}
    </section>
  );
};

export default Page;
