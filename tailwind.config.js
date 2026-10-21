/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Public Sans"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#f59e0b',
          amber: '#fbbf24',
          orange: '#ea580c',
          tangerine: '#f97316',
          warmDark: '#1c1917',
          warmGray: '#44403c',
          lightBg: '#fdfbf7',
          softBorder: '#fed7aa',
          pinkDark: '#701a75',
          pinkBase: '#831843',
          pinkRich: '#9d174d',
          pinkRose: '#be185d',
          pinkSoft: '#fdf2f8',
        }
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatLag: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      animation: {
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'float-lag': 'floatLag 5s ease-in-out infinite 1s',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
