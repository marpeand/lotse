import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { format } from "date-fns";

import React from "react";

const PostLink = ({ post }) => (
    <Link
        className={"justify-between pb-4 group/item flex hover:text-white transition duration-[250ms] ease-out hover:duration-[50ms]"}
        href={post.url}
    >
        <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{post.title}</h1>
        <span className="ml-4 font-light text-gray group-hover/item:text-white">{format(new Date(post.date), "dd/MM/yy")}</span>
    </Link>
);

const Home = () => {
    const filteredPosts = allPosts.filter((post) => !post.draft);

    return (
        <section className="group/section">
            <div className="group-hover/section:text-gray">
                {filteredPosts
                    .sort((a, b) => b.date.localeCompare(a.date))
                    .map((post) => (
                        <PostLink post={post} key={post._id} />
                    ))}
            </div>
        </section>
    );
};

export default Home;
