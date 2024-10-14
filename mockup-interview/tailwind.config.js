/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], // Add Oswald font
      },
    },
  },
  plugins: [],
}

