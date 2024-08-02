import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  prefetch: true,
  site: 'https://romanvanesyan.com',
  output: 'server',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    mdx()
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    gfm: true
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  redirects: {
    '/github': 'https://github.com/roman-vanesyan',
    '/x': 'https://x.com/roman_vanesyan'
  }
});
