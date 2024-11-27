import CONFIG from "@/blog.config";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const robotoRegular = await fetch(
    new URL("./fonts/Roboto-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const robotoBold = await fetch(
    new URL("./fonts/Roboto-Bold.ttf", import.meta.url)
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
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 90,
              fontWeight: "bold",
              letterSpacing: 0,
              background: "linear-gradient(90deg, #fff 0%, #f4f4f4 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              padding: 0,
            }}
          >
            {CONFIG.title}
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#f4f4f4",
              margin: "20px 0",
              padding: 0,
            }}
          >
            {CONFIG.description}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <p style={{ fontSize: 24, color: "#888" }}> {CONFIG.baseURL}</p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Roboto",
          data: robotoRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: robotoBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
