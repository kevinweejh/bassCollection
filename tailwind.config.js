/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'bg-change': 'bg-change 8s ease-in-out infinite'
      },
      keyframes: {
        'bg-change': {
          'from': { 'background-color': 'rgba(249, 229, 217, 0.8)' },
          '16%': { 'background-color': 'rgba(250, 212, 199, 0.8)' },
          '33%': { 'background-color': 'rgba(199, 217, 218, 0.8)' },
          '50%': { 'background-color': 'rgba(161, 210, 217, 0.8)' },
          '66%': { 'background-color': 'rgba(199, 217, 218, 0.8)' },
          '84%': { 'background-color': 'rgba(250, 212, 199, 0.8)' },
          'to': { 'background-color': 'rgba(249, 229, 217, 0.8)' }
        }
      }
    },
  },
  plugins: [],
}

