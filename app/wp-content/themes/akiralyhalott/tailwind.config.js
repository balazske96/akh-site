/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.php", "./../../mu-plugins/**/*.php"],
  theme: {
    extend: {
      boxShadow: {
        "spotify-iframe": "0px 0px 23px 10px rgba(0,0,0,0.75)",
      },
      fontFamily: {
        handwritten: ["Caveat", "cursive"],
      },
    },
    fontFamily: {
      serif: ["Quando", "ui-serif"],
      mono: ["Martian Mono"],
    },
  },
  plugins: [],
};
