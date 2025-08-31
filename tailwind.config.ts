import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6495ED',
        'primary-600': '#4169E1',
        'primary-700': '#00008B',
        foreground: '#000000',
        muted: '#595959',
        card: '#FFFFFF',
        border: '#E5E5E5',
      },
      borderRadius: {
        '2xl': '16px',
      },
      fontSize: {
        '2xl': '24px',
        '3xl': '30px',
        base: '18px',
        sm: '14px',
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: 'bold',
        },
        h2: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: 'semibold',
        },
      });
    }),
  ],
};

export default config;
