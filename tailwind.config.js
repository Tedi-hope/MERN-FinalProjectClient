/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        darker:'#0a0414',
        darkGreen:'#242b3a',
        lightBlue:'#170337',
      },
    },
  },
  plugins: [],
}

