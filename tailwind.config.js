/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080706',
        ink: '#ece8e1',
        body: '#c7c2b8',
        mut: '#9b968b',
        ember: '#ff5a1f',
        ember2: '#ff8a50',
        line: 'rgba(236,232,225,0.11)',
        line2: 'rgba(236,232,225,0.24)',
        noir: {
          950: '#080706',
          900: '#0e0c0a',
          850: '#141210',
          800: '#1c1916',
          750: '#27231f',
          700: '#3a3530',
          600: '#544d45',
          500: '#736b61',
          400: '#9b968b',
          300: '#c7c2b8',
          200: '#dedad2',
          100: '#ece8e1',
          50: '#f7f5f0',
        },
        accent: {
          ember: '#ff5a1f',
          'ember-bright': '#ff8a50',
          'ember-dim': 'rgba(255, 90, 31, 0.15)',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['Unbounded', '"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'blink': 'blink 1.1s steps(2) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
