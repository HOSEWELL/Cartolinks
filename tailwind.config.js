/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // optional if you use /pages
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter","ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Ubuntu","Cantarell","Noto Sans","sans-serif"],
      },
      colors: { brand: { DEFAULT: "#111827", accent: "#2563eb" } },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.06)" },
      borderRadius: { "2xl": "1rem", "3xl": "1.5rem" },
    },
  },
  plugins: [],
};
