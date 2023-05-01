const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["layouts/**/*.html", "../../content/**/*.md", "../../layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        primary: colors.purple,
        secondary: colors.green,
      },
    },
  },
  plugins: [],
}
