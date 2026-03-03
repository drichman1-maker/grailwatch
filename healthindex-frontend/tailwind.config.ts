import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // GrailWatch Theme
        'gw-bg': '#0A0C10',
        'gw-bg-secondary': '#14171C',
        'gw-card': '#1C2128',
        'gw-card-hover': '#242B35',
        'gw-border': '#30363D',
        'gw-border-strong': '#444C56',
        'gw-accent': '#00D1FF',
        'gw-accent-glow': 'rgba(0, 209, 255, 0.3)',
        'gw-emerald': '#00FF94',
        'gw-gold': '#FFD700',
        'gw-text': '#F0F6FC',
        'gw-text-secondary': '#8B949E',
        'gw-text-tertiary': '#484F58',
        // Grading companies
        'cgc': '#DAA520',
        'cbcs': '#4A90D9',
        // Publishers
        'marvel': '#E53238',
        'dc': '#0476F2',
        'image': '#FF6B00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
