import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        coastal: {
          50: "#f0f9f8",
          100: "#d7f0ed",
          200: "#b3e2dc",
          300: "#84ccc3",
          400: "#4db0a5",
          500: "#2d9489",
          600: "#1b736b",
          700: "#135752",
          800: "#0f433f",
          900: "#0b3431",
          950: "#041b1a",
        },
        sand: {
          50: "#fbf9f5",
          100: "#f5f0e6",
          200: "#eadfcb",
          300: "#ddcaa8",
          400: "#c8ad81",
          500: "#af9060",
          600: "#94744d",
          700: "#76593e",
          800: "#614936",
          900: "#503d2f",
          950: "#2b1f16",
        },
        clay: {
          50: "#fdf5f2",
          100: "#fbe8e1",
          200: "#f7d5c7",
          300: "#efb6a2",
          400: "#e38c71",
          500: "#d36545",
          600: "#b84a2d",
          700: "#9c3b24",
          800: "#803322",
          900: "#6a2e21",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

