/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  DarkMode: 'media',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    fontFamily: {
      'poppins': "'Poppins', sans-serif"
    },
    fontWeight: {
      thinPoppins: '100',
      lightPoppins:'300',
      regularPoppins: '400',
      boldPoppins:'700',
      blackPoppins:'900'
    }
  },
  plugins: [],
}
