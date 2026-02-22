/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bronx-gray': '#1e293b', // Сине-черный графит
        'bronx-dark': '#0f172a', // Темно-синий
        'bronx-orange': '#ff6b35', // Ярко-оранжевый
        'bronx-light': '#e2e8f0', // Светло-серый
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

