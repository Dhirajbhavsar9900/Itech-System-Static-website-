/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', "serif"],
      },
      backgroundImage: {
        'aboutImage': "url('./src/img/about-bg.png')",
        'bgImage': "url('./src/img/shaktiman-slide.png')",
        'arrowImage' : "url('./src/img/download.svg')",
        'menuBg': "url('./src/img/footer-bottom-bg.png)"
      }
    },
  },
  plugins: [],
}