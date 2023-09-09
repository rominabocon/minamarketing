/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mina-green': {
          100: '#A2F4C8',
          200: '#D4E8FF',
      
        },
        'mina-azul':'#3657E0' ,
        'mina-gris': '#3C3C3B',
        'mina-rosa': "#FFD1CF"
      }
    },
  },
  plugins: [],
}