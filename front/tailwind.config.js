/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Mulish": ['Mulish'],
      },
      fontSize: {
        ht: ["16px", "28px"],
        bt: ["16px", '24px'],
        mt: ["48px", '60.24px'],
      }
    },
  },
  plugins: [],
}