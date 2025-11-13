/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night-black': '#000300',
        'caribbean-green': '#00df9a',
      },
       keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-down': 'slideDown 1s ease-out forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        'slide-right': 'slideRight 1s ease-out forwards',
      },
    },
    },
  plugins: [],
}

