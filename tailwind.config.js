/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
