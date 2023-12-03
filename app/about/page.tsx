import { allAbouts } from "@/.contentlayer/generated";
import { MdxRenderer } from "../components/Mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About Me",
};
const About = () => {
    return (
        <article className="prose prose-invert">
            <MdxRenderer source={allAbouts[0].body.code} />
        </article>
    );
};

export default About;
