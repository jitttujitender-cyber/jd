import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: { xs: "480px" },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        heading: ["var(--font-poppins)", "Arial", "sans-serif"],
      },
      colors: {
        navy: "#0d1f3c",
        blue: "#1b4f8e",
        orange: "#e8610a",
        canvas: "#f4f6f9",
        ink: "#333333",
      },
      borderRadius: { card: "12px" },
      boxShadow: {
        soft: "0 10px 30px rgba(13, 31, 60, 0.08)",
        card: "0 5px 18px rgba(13, 31, 60, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
