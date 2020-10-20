import {
  FacetsGetters,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import { ProductVariant } from 'src/types/GraphQL';
import { FacetResultsData, SearchData } from './../types';
import { getProductFiltered } from './productGetters';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAll = (searchData, criteria?: string[]): AgnosticFacet[] => [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getGrouped = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  criteria?: string[]
): AgnosticGroupedFacet[] => [];

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCategoryTree = (searchData): AgnosticCategoryTree => ({} as any);

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getBreadcrumbs = (searchData): AgnosticBreadcrumb[] => [];

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
