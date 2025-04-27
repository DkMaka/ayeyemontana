/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        montana: {
          primary: '#2E3A59',
          secondary: '#0BB68C',
          accent: '#FF6B6B',
          light: '#F9FAFC',
          dark: '#1A2138',
          card1: '#2E3A59',
          card2: '#1E3A8A',
          card3: '#0F766E'
        }
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif']
      },
      backdropBlur: {
        sm: '4px',
      }
    },
  },
  plugins: [],
};