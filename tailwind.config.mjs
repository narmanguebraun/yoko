/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      inherit: "inherit",
      white: "#fff",
      light: "#f2f2f2",
      lightgrey: "#e5e5e5",
      grey1: "#111",
      grey2: "#555",
      grey3: "#999",
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", "sans-serif"],
      mono: ["GeistMono", "Courier", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
