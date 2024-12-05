/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nean_blue: "#4066EF",
        nean_red: "#FFAFAF",
        nean_lightD9: "#D9D9D9",
        nean_lightE1: "#e1e1e1",
        nean_creamF1: "#F1F0E8",
        nean_creamF2: "#F2F2F2",
        nean_creamF7: "#F7F9FC",
        nean_dark60: "rgba(0,0,0,0.6)",
        nean_dark30: "rgba(0,0,0,0.3)",
      },
      fontSize: {
        nean_lg: "48px",
        nean_md: "24px",
        nean_base: "16px",
      },
      lineHeight: {
        nean_lg: "72px",
        nean_md: "40px",
        nean_base: "32px",
      },
      width: {
        nean_lg: "1280px",
        nean_container: "600px",
      },
      gap: {
        nean_base: "16px",
        nean_md: "24px",
      },
    },
  },
  plugins: [],
};
