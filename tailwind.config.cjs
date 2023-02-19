/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat" , "sans-serif"],
        lobster: ['Lobster Two', "cursive"]
      }
    },
  },
  plugins: [],
}
