/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {      
      colors:{
        customBlue:{
          400:"#70a7d1",
          500:"#146eb4",
          600:"#4e92c7",
          700:"#0e4f82"
        },
        customGrey:{
          400:"#acacac",
          500:"#4e4e4e",
        },
        siderBarDark:"#1e2640",
        sideBarLight:"#e4e6e9",
        sideBarHoverDark:"#232b44",
        sideBarHoverLight:"#9498a4",
        sideBarText:"#7f8492",
      },
  },
  },
  plugins: [],
}

