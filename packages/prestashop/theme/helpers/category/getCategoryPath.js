import { categoryGetters } from '@jkawulok/prestashop-composables';
export function getCategoryPath(category, context = this) {
  return { name: 'category', params: { slug: categoryGetters.getSlug(category)}, path: `/${categoryGetters.getSlug(category)}`};
}
  