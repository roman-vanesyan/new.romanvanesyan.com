import { defineCollection, reference, z } from 'astro:content';

const bits = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().default(true),
    tags: z.array(reference('tags')),
    heading: z.string(),
    description: z.string(),
    published_at: z.date(),
    authored_by: reference('authors')
  })
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().default(true),
    heading: z.string(),
    description: z.string(),
    tags: z.array(reference('tags')),
    published_at: z.date(),
    authored_by: reference('authors')
  })
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    profile_url: z.string().url(),
    name: z.string()
  })
});

const tags = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string()
  })
});

export const collections = {
  articles,
  bits,
  authors,
  tags
};
