/** @type {import('prettier').Config} */
export default {
  parser: 'typescript',
  trailingComma: 'none',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
  quoteProps: 'preserve',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
