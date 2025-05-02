/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'sans': ['Arial', 'sans-serif'],
        'creative': ['Bebas Neue', 'sans-serif'],
        'modern': ['Righteous', 'sans-serif'],
        'elegant': ['Raleway', 'sans-serif'],
        'stylish': ['Quicksand', 'sans-serif'],
      },
      colors: {
        blue: {
          300: '#4DABF7',
          500: '#339AF0',
          600: '#228BE6',
        },
        purple: {
          900: '#5E35B1',
        },
        pink: {
          600: '#D81B60',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
