import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // FitLog accent color from design (#ccff00 lime)
        accent: "#ccff00",
      },
    },
  },
  plugins: [],
};

export default config;
