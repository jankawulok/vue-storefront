import { productGetters } from '@jkawulok/prestashop-composables';
export function getProductPath(product, context = this) {
  return { name: 'propduct', params: { slug: productGetters.getSlug(product)}, path: `/${productGetters.getSlug(product)}`};
}
  