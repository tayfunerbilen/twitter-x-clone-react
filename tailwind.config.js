/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        box: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
        'upper': '0 0 10px -3px rgba(0, 0, 0, 0.3)'
      },
      dropShadow: {
        arrow: 'drop-shadow(rgb(51, 54, 57) 1px -1px 1px)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

