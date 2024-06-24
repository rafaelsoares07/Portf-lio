/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1A0B2E",
        primaryComplement:"#874fc9"
      },
      gridTemplateColumns: {
        'fixed-3': 'repeat(4, 200px)',  
      },
      gridTemplateRows: {
        'fixed-3': 'repeat(4, 200px)',  
      },
      backgroundImage: {
        'site1': "url('./public/site1.png')",
        
      }
    },
  },
  plugins: [],
}