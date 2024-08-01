import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['kazimir', ...defaultTheme.fontFamily.serif],
        sans: ['inter-variable', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
