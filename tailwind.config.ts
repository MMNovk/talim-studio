import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0e0e0e',
        'ink-2': '#3a3a3a',
        'ink-3': '#7a7a7a',
        paper: '#f5f3ef',
        'paper-2': '#eceae5',
        accent: '#c8ff00',
        'accent-dark': '#9ec800',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        lg: '12px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        underlineReveal: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up-1': 'fadeUp 0.7s ease forwards 0.1s',
        'fade-up-2': 'fadeUp 0.8s ease forwards 0.25s',
        'fade-up-3': 'fadeUp 0.8s ease forwards 0.5s',
        ticker: 'ticker 22s linear infinite',
        'underline-reveal': 'underlineReveal 0.6s ease forwards 1s',
      },
    },
  },
  plugins: [],
}

export default config
