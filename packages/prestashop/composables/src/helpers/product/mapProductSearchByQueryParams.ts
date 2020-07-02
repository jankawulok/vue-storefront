/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { ProductsSearchParams } from '../../types';
import { ProductSortInput, SortEnum } from '../../types/GraphQL';

const mapProductSearchByQueryParams = (params) => {
  const searchQuery: ProductsSearchParams = {};
  console.log(params);
  searchQuery.filter = {};
  // let filters;
  // if (params.filters) {
  //   filters = Object.keys(params.filters).map(filter => {
  //     const options = params.filters[filter].options.filter(option => option.selected);
  //     return {
  //       [filter]: {
  //         in: options.map(option => option.key)
  //       }
  //     };
  //   });
  // }
  // searchQuery.filter = params.filters
  if (params.term) {
    searchQuery.filter = params.term;
  }
  let filters;
  if (params.filters) {
    filters = Object.keys(params.filters).map(filter => {
      const options = params.filters[filter].buckets.filter(option => option.selected);
      return {
        in: options.map(option => option.id)
      };
    });
  }
  if (params.catId) {
    searchQuery.filter = Object.assign({}, searchQuery.filter,  { category_with_parents: { in: params.catId} })
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
