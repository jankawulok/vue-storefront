/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */

import { getCurrentInstance } from '@vue/composition-api';
import { AgnosticFacet } from '@vue-storefront/core';
import { Manufacturer, ProductSortInput, SortEnum } from '@jkawulok/prestashop-composables';

const nonFilters = ['page', 'sort', 'itemsPerPage'];

const getContext = () => {
  const vm = getCurrentInstance();
  return vm.$root as any;
};

const reduceFilters = (query) => (prev, curr) => {
  const makeArray = Array.isArray(query[curr]) || nonFilters.includes(curr);
  return {
    ...prev,
    [curr]: makeArray ? query[curr] : [query[curr]]
  };
};

const buildBaseFilter = (pageType: string, slug: string) => {
  // todo: in product listing we should diplay products with visibility: catalog or both.
  switch (pageType) {
    case 'category':
      return { category_with_parents: { in: slug } };
    case 'manufacturer':
      return { manufacturer: { in: slug } };
    default:
      return {};
  }
};

const buildSortTerm = (sort: string): ProductSortInput => {
  const [option, direction] = sort.split('-');
  const sortOptions: ProductSortInput = {
    [option]: SortEnum[direction.charAt(0).toUpperCase() + direction.slice(1)]
  };
  return sortOptions;
};

const getFiltersDataFromUrl = (context, onlyFilters) => {
  const { query } = context.$router.history.current;
  return Object.keys(query)
    .filter((f) =>
      onlyFilters ? !nonFilters.includes(f) : nonFilters.includes(f)
    )
    .reduce(reduceFilters(query), {});
};

const useUiHelpers = () => {
  const context = getContext();

  const getFacetsFromURL = () => {
    const { query, params, name } = context.$router.history.current;

    const slug = params.slug_1;

    return {
      categorySlug: name === 'category' ? slug : null,
      baseFilter: buildBaseFilter(name, slug),
      term: query.term,
      sort: query.sort || 'score-desc',
      page: parseInt(query.page) || 0,
      filters: getFiltersDataFromUrl(context, true),
      itemsPerPage: parseInt(query.itemsPerPage, 10) || 20
    };
  };

  const getCatLink = (
    category
  ): string => {
    return `/c/${category.slug}`;
  };

  const changeSorting = (sort: string) => {
    const {
      query
    } = context.$router.history.current;
    context.$router.push({
      query: { ...query, sort }
    });
  };

  const changeFilters = (filters: any) => {
    context.$router.push({
      query: {
        ...getFiltersDataFromUrl(context, false),
        ...filters
      }
    });
  };

  const changeItemsPerPage = (
    itemsPerPage: number
  ) => {
    context.$router.push({
      query: {
        ...getFiltersDataFromUrl(context, false),
        itemsPerPage
      }
    });
  };

  const getManufacturerLink = (
    manufacturer: Manufacturer
  ): string => {
    return `/m/${manufacturer.url_key}`;
  };

  const changeSearchTerm = (term: string) => {
    context.$router.push({
      query: {
        ...getFiltersDataFromUrl(context, false),
        term: term || undefined
      }
    });
  };

  const isFacetColor = (
    facet: AgnosticFacet
  ): boolean => facet.id === ('kolor' || 'color');

  const isFacetCheckbox = (): boolean => false;

  return {
    getFacetsFromURL,
    getCatLink,
    getManufacturerLink,
    changeSorting,
    changeFilters,
    changeItemsPerPage,
    changeSearchTerm,
    isFacetColor,
    buildSortTerm,
    isFacetCheckbox
  };
};

export default useUiHelpers;
