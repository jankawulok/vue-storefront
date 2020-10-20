/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */

import { useFacetFactory, FacetSearchResult } from '@vue-storefront/core';
import { getCategory } from '@jkawulok/prestashop-api';
import { FacetResultsData } from './../types';
import { mapSortBy } from '../helpers';

const ITEMS_PER_PAGE = [20, 40, 80];

const factoryParams = {
  search: async (
    params: FacetSearchResult<FacetResultsData>
  ): Promise<FacetResultsData> => {
    const itemsPerPage = params.input.itemsPerPage;
    const categoryResponse = await getCategory({
      withProducts: true,
      productSearch: params.input.term,
      filter: {
        url_key: { eq: params.input.categorySlug }
      },
      productPageSize: params.input.itemsPerPage,
      productCurrentPage: params.input.page,
      productSort: mapSortBy(params.input.sort)
    });
    const categories = categoryResponse.data.categories.items;
    const products = categoryResponse.data.categories.items[0]?.products?.items || [];
    const productsTotal = categoryResponse.data.categories.items[0]?.products?.total_count?.value || 0;
    const facets = {};
    categoryResponse.data.categories.items[0].products.available_filters.forEach((filter) => {
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
      total: productsTotal,
      perPageOptions: ITEMS_PER_PAGE,
      itemsPerPage
    };
  }
};

export default useFacetFactory<FacetResultsData>(factoryParams);
