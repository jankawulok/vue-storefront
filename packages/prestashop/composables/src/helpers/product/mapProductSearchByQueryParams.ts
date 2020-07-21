/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { ProductsSearchParams } from '../../types';
import { ProductSortInput, SortEnum } from '../../types/GraphQL';

const mapProductSearchByQueryParams = (params) => {
  const searchQuery: ProductsSearchParams = {};
  console.log(params);
  searchQuery.filter = {};
  if (params.term) {
    searchQuery.filter = params.term;
  }
  const filters = {};
  if (params.filters) {
    Object.keys(params.filters).map(filter => {
      const options = params.filters[filter].options.filter(option => option.selected);
      console.log(filter);
      console.log(options);
      if (options.length > 0) {
        filters[filter] = {
          in: options.map(option => option.value)
        }
      }
    });
  }
  if (params.catId) {
    searchQuery.filter = Object.assign({}, searchQuery.filter,  { category_with_parents: { in: params.catId} })
  }
  console.log(filters);
  if (filters) {
    searchQuery.postFilter = filters;
  }
  if (params.sort) {
    const [option, direction] = params.sort.split('-');
    const sortOptions: ProductSortInput = {
      [option]: SortEnum[direction.charAt(0).toUpperCase() + direction.slice(1)]
    };
    searchQuery.sort = sortOptions;
  }
  if (params.page) {
    searchQuery.currentPage = params.page
  }
  if (params.perPage) {
    searchQuery.pageSize = params.perPage
  }
  if (params.search) {
    searchQuery.search = params.search
  }
  if (params.aggregation) {
    searchQuery.aggregation = params.aggregation
  }
  console.log(searchQuery);
  return searchQuery
};

export {
  mapProductSearchByQueryParams
};
