/* eslint-disable no-unused-vars */

import { ProductsSearchParams } from '../../types';
import { ProductSortInput, SortEnum } from '../../types/GraphQL';
/* eslint-disable camelcase, @typescript-eslint/camelcase */

const mapProductSearchByQueryParams = (params) => {
  const searchQuery: ProductsSearchParams = {};
  searchQuery.filter = {};
  if (params.term) {
    searchQuery.filter = params.term;
  }
  if (params.filter) {
    searchQuery.postFilter = params.filter;
  }
  if (params.catId) {
    /* eslint-disable camelcase */
    searchQuery.filter = Object.assign({}, searchQuery.filter, { category_with_parents: { in: params.catId} });
  }
  if (params.sort) {
    const [option, direction] = params.sort.split('-');
    const sortOptions: ProductSortInput = {
      [option]: SortEnum[direction.charAt(0).toUpperCase() + direction.slice(1)]
    };
    searchQuery.sort = sortOptions;
  }
  if (params.page) {
    searchQuery.currentPage = params.page;
  }
  if (params.perPage) {
    searchQuery.pageSize = params.perPage;
  }
  if (params.search) {
    searchQuery.search = params.search;
  }
  if (params.aggregation) {
    searchQuery.aggregation = params.aggregation;
  }
  return searchQuery;
};

export {
  mapProductSearchByQueryParams
};
