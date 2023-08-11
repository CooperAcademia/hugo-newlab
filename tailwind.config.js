const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["layouts/**/*.html", "../../content/**/*.md", "../../layouts/**/*.html", "../../hugo_stats.json"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fffffe',
        primary: colors.purple,
        secondary: colors.green,
      },
    },
  },
  plugins: [],
}
