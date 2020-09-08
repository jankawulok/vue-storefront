import { CategoryGetters, AgnosticCategoryTree, AgnosticBreadcrumb } from '@vue-storefront/core';
import { Category } from '../types/GraphQL';

export const getCategoryName = (category: Category): string => category ? (category as any).name : '';

export const getCategoryDescription = (category: Category): string => category ? (category as any).description : '';

export const getCategorySlug = (category: Category): string => category ? (category as any).slug : '';

export const getCategoryTree = (category: Category): AgnosticCategoryTree | null => {
  if (!category) {
    return null;
  }
  const getParent = (category: Category): Category => (category.parent && !category.children?.length ? getParent(category.parent) : category);
  const buildTree = (category: Category) => ({
    label: category.name,
    slug: category.url_key,
    items: category.children ? category.children.map(buildTree) : [],
    productCount: category.product_count
  });
  return buildTree(getParent(category));
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCategoryFiltered = (categories: Category[]): Category[] => {
  return categories;
};

export const getCategoryBreadcrumbs = (category: Category): AgnosticBreadcrumb[] =>
  (category ? category.breadcrumbs : [])
    .map((item) => ({
      text: item.name,
      link: item.slug
    }));

const categoryGetters: CategoryGetters<Category> = {
  getFiltered: getCategoryFiltered,
  getTree: getCategoryTree,
  getName: getCategoryName,
  getDescription: getCategoryDescription,
  getSlug: getCategorySlug,
  getBreadcrumbs: getCategoryBreadcrumbs
};

export default categoryGetters;
