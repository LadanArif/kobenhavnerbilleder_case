/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: { pimg1: 'url("/images/img8.webp")', pimg2: 'url("/images/img7.webp")' },
    },
    fontFamily: {
      goblin: ["goblin", "serif"],
      martel: ["martel", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
