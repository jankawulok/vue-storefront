export function getCategoryPath(slug) {
  return { name: 'category', params: { slug: slug}, path: `/${slug}` };
}
