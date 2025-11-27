import { Post } from "@/.contentlayer/generated";

export const organizeAndSortPosts = (
  posts: Post[]
): { [year: string]: Post[] }[] => {
  const organizedPosts = posts.reduce(
    (acc: { [year: string]: Post[] }, post: Post) => {
      if (!post.draft) {
        const year = new Date(post.date).getFullYear().toString();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(post);
      }
      return acc;
    },
    {}
  );

  return Object.entries(organizedPosts)
    .map(([year, posts]) => ({
      [year]: posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    }))
    .sort((a, b) => parseInt(Object.keys(b)[0]) - parseInt(Object.keys(a)[0]));
};
