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
        <>
            {allProjects.map((project) => (
                <Link className={"pb-4 flex"} href={project.url} key={project.slug}>
                    <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{project.title}</h1>
                </Link>
            ))}
        </>
    );
};

export default Page;
