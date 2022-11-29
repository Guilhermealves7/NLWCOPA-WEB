/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif',
      },
      backgroundImage:{
        app: 'url(/app-bg.png)',

      },
      colors:{
        gray:{
          100:'#E1E1E6',
          900:'#121214',
          800:'#202024',
          600:'#121214',
          300:'#8D8D99',
        },
        yellow:{
          500:'#F7DD43',
          700: '#E5CD3D',

        },
        ignite:{
          500:'#129e57',
        }
      }
    },
  },
  plugins: [],
}
