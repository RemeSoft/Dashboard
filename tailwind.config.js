/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibm: ["IBM Plex Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
