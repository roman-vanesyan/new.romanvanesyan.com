import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

const charlotte = {
  '50': '#edfbfe',
  '100': '#c0f0fb',
  '200': '#a9e8f8',
  '300': '#6dd5f3',
  '400': '#2abae6',
  '500': '#0e9dcc',
  '600': '#0f7dab',
  '700': '#13658b',
  '800': '#195371',
  '900': '#194660',
  '950': '#0a2c42'
};

const oldLace = {
  '50': '#f9f2e3',
  '100': '#f4e9d1',
  '200': '#e9d19e',
  '300': '#ddb66c',
  '400': '#d59e4a',
  '500': '#cc8134',
  '600': '#b4642b',
  '700': '#964a27',
  '800': '#7b3c25',
  '900': '#653222',
  '950': '#39190f'
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./astro.config.mjs', './src/**/*.{astro,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%'
          }
        }
      },

      colors: {
        charlotte,
        'old-lace': oldLace
      },

      fontFamily: {
        serif: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
      },

      backgroundImage: {
        noise: 'url("/public/noise.png")'
      }
    }
  },
  plugins: [typography]
};
