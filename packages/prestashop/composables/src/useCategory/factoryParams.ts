import { UseCategoryFactoryParams } from '@vue-storefront/core';
import { getCategory} from '@jkawulok/prestashop-api';
import { Category } from './../types/GraphQL';
import { mapProductSearchByQueryParams } from '../helpers';
import { CategorySearchParams } from '../types';

export const params: UseCategoryFactoryParams<Category, any> = {
  categorySearch: async (params) => {
    // let searchQuery: CategorySearchParams = {withProducts: params.withProducts, filter: params.filter, search: params.search, sort: params.sort, pageSize: params.pageSize, currentPage: params.currentPage};
    const searchQuery: CategorySearchParams = { ...params};
    const productsQuery = mapProductSearchByQueryParams(params.productSearchParams);
    params.products = productsQuery;
    if (productsQuery.aggregation) {
      searchQuery.productAggregation = productsQuery.aggregation;
    }
    if (productsQuery.search) {
      searchQuery.productSearch = productsQuery.search;
    }
    if (productsQuery.filter) {
      searchQuery.productFilter = productsQuery.filter;
    }
    if (productsQuery.postFilter) {
      searchQuery.productPostFilter = productsQuery.postFilter;
    }
    if (productsQuery.sort) {
      searchQuery.productSort = productsQuery.sort;
    }
    if (productsQuery.pageSize) {
      searchQuery.productPageSize = productsQuery.pageSize;
    }
    if (productsQuery.currentPage) {
      searchQuery.productCurrentPage = productsQuery.currentPage;
    }
    const categoryResponse = await getCategory(searchQuery);
    if (categoryResponse.data?.category) {
      return [categoryResponse.data.category];
    }
    if (categoryResponse.data.categories?.items) {
      return categoryResponse.data.categories.items;
    }
  }
};
