import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

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
