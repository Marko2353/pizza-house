/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive']
      },
      colors: {
        primary: '#FF6F00',
        secondary: '#8BC34A',
        accent: '#FFC107',
        dark: '#333333',
        light: '#F5F5F5',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}