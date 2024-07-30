import { defineCollection, z } from 'astro:content';

const bits = defineCollection({
  type: 'content',
  schema: z.object({
    status: z.enum(['draft', 'published', 'hidden']),
    heading: z.string(),
    published_at: z.date(),
    authored_by: z.string()
  })
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    status: z.enum(['draft', 'published', 'hidden']),
    heading: z.string(),
    subheading: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()),
    published_at: z.date(),
    authored_by: z.string()
  })
});

export const collections = {
  articles
};
