/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0faff',
          100: '#b3f3ff',
          200: '#80ebff',
          300: '#4de3ff',
          400: '#1adcff',
          500: '#00c4ff', // bright ocean blue
          600: '#009ccc',
          700: '#007399',
          800: '#004a66',
          900: '#002233',
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        gray: {
          950: '#0B0D0F',
          900: '#12151C',
          800: '#1E232B',
          700: '#374151',
          600: '#4b5563',
          500: '#6b7280',
          400: '#9aa0a6',
          300: '#d1d5db',
          200: '#e5e7eb',
          100: '#f3f4f6',
          50: '#f9fafb',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui','syne', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1200px',
      },
      lineHeight: {
        heading: '1.2',
        body: '1.5',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #22d3ee, 0 0 10px #22d3ee, 0 0 15px #22d3ee' },
          '100%': { boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 30px #22d3ee' },
        },
      },
    },
  },
  plugins: [],
};