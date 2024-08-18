/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.php", "./../../mu-plugins/**/*.php"],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ["Caveat", "cursive"],
      },
    },
    fontFamily: {
      serif: ["Quando", "ui-serif"],
    },
  },
  plugins: [],
};
