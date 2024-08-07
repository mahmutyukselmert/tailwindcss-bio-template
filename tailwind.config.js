/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-black': 'rgb(22,22,22)',
      }
    },
  },
  plugins: [],
}