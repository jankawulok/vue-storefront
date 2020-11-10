import {
  FacetsGetters,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import { ProductVariant, Category } from 'src/types/GraphQL';
import { FacetResultsData, SearchData } from './../types';
import { getProductFiltered } from './productGetters';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAll = (searchData, criteria?: string[]): AgnosticFacet[] => [];

const getGrouped = (searchData: SearchData): AgnosticGroupedFacet[] => {
  if (!searchData.data?.facets) {
    return [];
  }

  return searchData.data.facets.map((facet) => {
    return {
      id: facet.attribute_code,
      label: facet.label,
      count: facet.count,
      options: facet.options.map((option) => {
        return {
          type: 'term',
          id: option.value,
          value: option.label,
          count: option.count,
          attrName: facet.attribute_code
        };
      })
    };
  });
};

const getSortOptions = (searchData: SearchData): AgnosticSort => {
  const options = [
    {
      type: 'sort',
      value: 'score-desc',
      id: 'score-desc',
      label: 'Best match',
      count: null
    },
    {
      type: 'sort',
      value: 'name-asc',
      id: 'name-asc',
      label: 'A do Z',
      count: null
    },
    {
      type: 'sort',
      value: 'price-asc',
      id: 'price-asc',
      label: 'Price from low to high',
      count: null
    },
    {
      type: 'sort',
      value: 'price-desc',
      id: 'price-desc',
      label: 'Price from high to low',
      count: null
    }
  ].map((o) => ({ ...o, selected: o.id === searchData.input.sort }));

  const selected =
    options.find((o) => o.id === searchData.input.sort)?.id || 'score-desc';

  return { options, selected };
};

export const getCategoryTree = (searchData: SearchData): AgnosticCategoryTree | null => {
  if (!searchData.data?.categories) {
    return null;
  }
  const getParent = (category: Category): Category => (category.parent && !category.children?.length ? getParent(category.parent) : category);
  const buildTree = (category: Category) => ({
    label: category.name,
    slug: category.url_key,
    items: category.children ? category.children.map(buildTree) : [],
    productCount: category.product_count
  });
  return buildTree(getParent(searchData.data.categories[0]));
};

const getProducts = (searchData: SearchData): ProductVariant[] => {
  return getProductFiltered(searchData.data.products, { master: true });
};

const getPagination = (searchData: SearchData): AgnosticPagination => {
  if (!searchData.data) {
    return {} as any;
  }

  return {
    currentPage: searchData.input.page,
    totalPages: Math.ceil(searchData.data.total / searchData.data.itemsPerPage),
    totalItems: searchData.data.total,
    itemsPerPage: searchData.input.itemsPerPage,
    pageOptions: searchData.data.perPageOptions
  };
};

const getBreadcrumbs = (searchData): AgnosticBreadcrumb[] =>
  (searchData.data?.categories[0] ? searchData.data?.categories[0].breadcrumbs : [])
    .map((item) => ({
      text: item.name,
      link: item.slug
    }));

const facetGetters: FacetsGetters<FacetResultsData, ProductVariant[]> = {
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination
};

export default facetGetters;
