/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium palette: warm whites, off-white, charcoal, deep black, soft beige, subtle gray
        ink: {
          DEFAULT: '#0E0E0E',
          900: '#0E0E0E',
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        bone: {
          DEFAULT: '#F6F2EC',
          50: '#FBF9F5',
          100: '#F6F2EC',
          200: '#EFE9DF',
        },
        sand: {
          DEFAULT: '#D9CDB8',
          200: '#E6DCC9',
          300: '#D9CDB8',
          400: '#C4B69A',
        },
        charcoal: {
          DEFAULT: '#3A3A3A',
          500: '#3A3A3A',
          600: '#2A2A2A',
        },
        stone: {
          400: '#9A958A',
          500: '#7A766E',
        },
        accent: {
          DEFAULT: '#A8896A',
          500: '#A8896A',
          600: '#8E7050',
        },
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wide2: '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scroll-hint': 'scrollHint 2.2s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(10px)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        card: '0 2px 4px rgba(0,0,0,0.04), 0 24px 48px -12px rgba(0,0,0,0.10)',
        elev: '0 4px 12px rgba(0,0,0,0.06), 0 32px 64px -16px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
