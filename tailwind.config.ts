import type { Config } from "tailwindcss";
import { darkBackground } from "./blog.config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: darkBackground || "#1a1a1a",
        gray: {
          50: "#F0F0F0",
          100: "#E0E0E0",
          200: "#C2C2C2",
          300: "#A3A3A3",
          400: "#858585",
          500: "#656565",
          600: "#525252",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
