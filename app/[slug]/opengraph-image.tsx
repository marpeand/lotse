import { ImageResponse } from "next/og";
import { allPosts } from "contentlayer/generated";
import CONFIG from "@/blog.config";

export const runtime = "edge";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Post not found
        </div>
      ),
      { ...size }
    );
  }

  const robotoMedium = await fetch(
    new URL("../fonts/Roboto-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const RobotoBold = await fetch(
    new URL("../fonts/Roboto-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 50,
          fontFamily: "Roboto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 24,
            }}
          >
            {post.title}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: "#666",
            }}
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: "bold",
              color: "#555",
            }}
          >
            {CONFIG.title}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Roboto",
          data: robotoMedium,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: RobotoBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
