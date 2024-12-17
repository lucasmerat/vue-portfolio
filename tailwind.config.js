const colors = require('tailwindcss/colors')

module.exports = {
content: ['./src/**/*.{vue,js,jsx,ts,tsx}', './src/**/*.css'],
darkMode: 'media',
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '1rem',
      full: '50%',
    },
    colors: {
      accent: '#efdf90',
      brand: {
        light: '#247b8c',
        dark: '#1a5965',
      },
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      pink: colors.pink,
    },
    extend: {
      height: {
        '144': '40rem',
        '90vh': '90vh'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
