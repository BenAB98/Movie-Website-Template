/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    container:{
      center:true,
    },
    extend: {
      colors:{
        background:"#12191F",
        grayLight:"#84878D",
        grayWhite:"#BEC1C8",
        ogangeLink:"#FFAA3C",
        keywords:"#0000001A"
      },
    },
  },
  plugins: [],
}