/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFD166',
        dark: '#3A506B',
        light: '#EDF5E1',
      },
    },
  },
  plugins: [],
}

