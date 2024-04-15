/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ["Mulish", 'sans-serif'],
        'popin' : ["Poppins", 'sans-serif']
      },
      boxShadow: {
        '1xl': ' 0px 0px 10px rgba(0, 0, 0, 0.09)',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'xmd': {'max': '900px'},
        // => @media (max-width: 900px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '426px'},
        // => @media (max-width: 426px) { ... }
      },
      backgroundImage: {
        'hero': "url('/src/images/20240413_131722.webp')",
      },
      animation: {
        'spino': 'spino 8s ease-in-out infinite',
        'spino1': 'spin 8s ease-in-out infinite',
      },
      keyframes: {
        spino: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
          },
        },
      },
      borderRadius: {
        'round-spin' : '60% 40% 30% 70%/60% 30% 70% 40%'
      },
      transitionDuration: {
        '5000': '5000ms',
      }
    },
  },
  plugins: [],
}