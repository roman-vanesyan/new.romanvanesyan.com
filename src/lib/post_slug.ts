export const post_slug = (post: { slug: string; data: { draft: boolean } }) =>
  post.data.draft ? `${post.slug}/draft` : post.slug;
