import { getCollection } from 'astro:content';
import { differenceInMilliseconds } from 'date-fns';

export const all_articles = (await getCollection('articles')).sort((a, b) =>
  differenceInMilliseconds(b.data.published_at, a.data.published_at)
);
export const all_bits = (await getCollection('bits')).sort((a, b) =>
  differenceInMilliseconds(b.data.published_at, a.data.published_at)
);
const tags = [...all_articles, ...all_bits]
  .flatMap(({ data }) => data.tags)
  .reduce(
    (acc, key) => {
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

export const all_tags = Object.entries(tags);
export const top_10_freq_tags = all_tags
  .sort(([_, l], [__, r]) => l - r)
  .slice(0, 10);
