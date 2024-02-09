/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Geist", "Helvetica", "sans-serif"],
      mono: ["GeistMono", "Courier", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
