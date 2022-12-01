/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway-1': ['Raleway', 'sans-serif'],
      },
      colors: {
        'black-rgba-1': 'rgba(0,0,0,.5)',
        'white-rgba-2': 'rgba(255,255,255, .98)',
      },
      backgroundImage: {
        'hero-bgi-1': "url('../../assets/hero-img.jpg')",
        'hero-bgi-2': "linear-gradient(45deg, #5651e5 0%, #709dff 100%)",
      }
    },
  },
  plugins: [],
}
