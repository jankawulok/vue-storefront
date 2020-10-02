import { useFacetFactory, FacetSearchResult } from '@vue-storefront/core';
import { getProduct } from '@jkawulok/prestashop-api';
import { FacetResultsData } from './../types';
import { mapProductSearchByQueryParams } from '../helpers';

const ITEMS_PER_PAGE = [20, 40, 80];

const factoryParams = {
  search: async (
    params: FacetSearchResult<FacetResultsData>
  ): Promise<FacetResultsData> => {
    const itemsPerPage = params.input.itemsPerPage;
    const categories = [];
    const productQuery = mapProductSearchByQueryParams(params.input);

    const productResponse = await getProduct(productQuery);
    const products = productResponse.data.products.items;
    const facets = {};
    productResponse.data.products.available_filters.forEach((filter) => {
      const { options, ...rest } = filter;
      facets[filter.attribute_code] = {
        ...rest,
        options: options.map((value) => ({ ...value, selected: false }))
      };
    });

    return {
      products,
      categories,
      facets,
      total: productResponse.data.products.total_count.value,
      perPageOptions: ITEMS_PER_PAGE,
      itemsPerPage
    };
  }
};

export default useFacetFactory<FacetResultsData>(factoryParams);
