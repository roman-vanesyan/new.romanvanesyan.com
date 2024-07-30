import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  prefetch: true,
  site: 'https://romanvanesyan.com',
  output: 'hybrid',
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
  adapter: cloudflare()
});
