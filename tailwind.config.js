/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bronx-gray': '#1a1a1a',
        'bronx-dark': '#0f0f0f',
        'bronx-orange': '#ff4500',
        'bronx-light': '#e0e0e0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

