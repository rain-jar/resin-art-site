/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9D7F59',
        accent: '#E8DEC5',
        footer: '#683930', // slightly darker footer shade
      },
      borderRadius: {
        lg: '1rem',
      },
    },
  },
  plugins: [],
}
