import type { Post } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Card from "./Card";

const PostSection = ({ posts, year }: { posts: Post[]; year: string }) => {
  return (
    <div className="mt-10">
      <span className="font-bold">{year}</span>
      <div className="group/section">
        <div className="group-hover/section:text-gray-500">
          {posts.map((post: Post) => {
            let postDate = format(new Date(post.date), "dd/MM");
            return (
              <Card
                title={post.title}
                date={postDate}
                slug={post.slug}
                key={post.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostSection;
