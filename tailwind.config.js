/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF0F3',
          100: '#FFE1E7',
          200: '#FFC9D5',
          300: '#FFADBE',
          400: '#FF8CA7',
          500: '#FF6B90', // primary pink
          600: '#FF497A',
          700: '#FF2765',
          800: '#FF0550',
          900: '#CC003F',
        },
        accent: {
          50: '#EAFFF0',
          100: '#D5FFE0',
          200: '#B0FFCC',
          300: '#8BFFB7',
          400: '#66FFA3',
          500: '#41FF8F', // accent mint
          600: '#1CFF7A',
          700: '#00F766',
          800: '#00D456',
          900: '#00B047',
        },
        chocolate: {
          50: '#F8F4F1',
          100: '#F1E9E3',
          200: '#E3D3C8',
          300: '#D5BEAC',
          400: '#C7A991',
          500: '#B99375',
          600: '#AB7E5A',
          700: '#8B6548', // chocolate brown
          800: '#6B4C36',
          900: '#4B3424',
        },
        cream: {
          50: '#FFFEFA',
          100: '#FFFDF5',
          200: '#FFFBEB',
          300: '#FFF8E0',
          400: '#FFF6D6',
          500: '#FFF3CC', // cream
          600: '#FFE9A3',
          700: '#FFDF7A',
          800: '#FFD652',
          900: '#FFCC29',
        },
      },
      fontFamily: {
        'display': ['Quicksand', 'sans-serif'],
        'body': ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};