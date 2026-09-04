/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        gelo:"#faf7f9", 
        "aqua-light":"#cffafe",
        "aqua-dark" :"#0e7490",
        "petroleo-dark" :"#0f172a",
        purple : "#A020F0"
      }
    },
  },
  plugins: [],
};