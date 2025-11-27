import { allAbouts } from "@/.contentlayer/generated";
import { MdxRenderer } from "../components/Mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "About",
  description: "About Me",
};
const About = () => {
  const about = allAbouts[0];
  if (!about) return notFound();
  return (
    <article className="prose prose-invert mt-10">
      <MdxRenderer source={about.body.code} />
    </article>
  );
};

export default About;
