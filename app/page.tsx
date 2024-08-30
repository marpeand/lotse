import { allPosts } from "@/.contentlayer/generated";
import Table from "./components/Table";
import { organizeAndSortPosts } from "./lib/getPosts";

const Home = () => {
  const postsArray = organizeAndSortPosts(allPosts);

  return (
    <>
      {postsArray.map((yearPosts) => {
        const year = Object.keys(yearPosts)[0];
        const posts = yearPosts[year];

        return <Table year={year} posts={posts} key={year} />;
      })}
    </>
  );
};

export default Home;
