/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primaryBg: "#0f1420",
      primaryText: "#00bcd4"
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'title': ['Roboto Slab', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'),],
}