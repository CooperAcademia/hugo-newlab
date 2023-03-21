const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "../../content/**/*.md", "../../layouts/**/*.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      primary: colors.purple,
      secondary: colors.green,
    }
  },
  plugins: [],
}
