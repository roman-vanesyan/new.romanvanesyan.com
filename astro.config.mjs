import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

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
    syntaxHighlight: 'prism',
    gfm: true,
    remarkPlugins: [[remarkToc, { heading: 'toc', maxDepth: 4 }]],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
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
