import { getProduct } from '@jkawulok/prestashop-api';
import { Product, Aggregation } from '../types/GraphQL';
import { UseProductFactoryParams, AgnosticSortByOption } from '@vue-storefront/core';
import { ProductsSearchParams } from '../types';
import { mapProductSearchByQueryParams } from '../helpers';

const availableSortingOptions: AgnosticSortByOption[] = [
  { value: 'score-desc', label: 'Best Match' },
  { value: 'name-asc', label: 'Name asc' },
  { value: 'name-desc', label: 'Name desc' },
  { value: 'price-asc', label: 'Price from low to high' },
  { value: 'price-desc', label: 'Price from high to low' }
];
  // PRODUCT, PRODUCT_SEARCH_PARAMS, PRODUCT_FILTERS, SORTING_OPTIONS
export const params: UseProductFactoryParams<
  Product,
  ProductsSearchParams,
  Record<string, Aggregation>,
  AgnosticSortByOption[]
> = {
  productsSearch: async (params: ProductsSearchParams) => {
    const productsQuery = mapProductSearchByQueryParams(params);
    const productResponse = await getProduct(productsQuery);
    const filtersResult = productResponse.data.products.available_filters;
    const filters = {};
    filtersResult.forEach((filter) => {
      const { options, ...rest } = filter;
      filters[filter.attribute_code] = {
        ...rest,
        options: options.map((value) => ({ ...value, selected: false }))
      };
    });
    return {
      data: productResponse.data.products.items,
      total: productResponse.data.products.total_count.value,
      availableFilters: filters,
      availableSortingOptions
    };
  }
};
