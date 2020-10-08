/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */

import { getCurrentInstance } from '@vue/composition-api';
import { AgnosticFacet } from '@vue-storefront/core';
import { Category, Manufacturer } from '~/../composables/lib';

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

const getPageType = (context): string => {
  return context.$router.component;
};

const buildBaseFilter = (pageType: string, slug: string) => {
  // todo: in product listing we should diplay products with visibility: catalog or both.
  switch (pageType) {
    case 'Category':
      return { category_with_parents: { in: slug } };
    case 'Manufacturer':
      return { manufacturer: { in: slug } };
    default:
      return {};
  }
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
    const {
      query,
      params
    } = context.$router.history.current;

    const slug = params.slug;

    return {
      terms: buildBaseFilter(
        getPageType(context),
        slug
      ),
      sort: query.sort || 'score-desc',
      page: query.page,
      filters: getFiltersDataFromUrl(context, true),
      itemsPerPage:
                                   parseInt(query.itemsPerPage, 10) || 20
    };
  };

  const getCatLink = (
    category: Category
  ): string => {
    return `/c/${category.url_key}`;
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
    isFacetCheckbox
  };
};

export default useUiHelpers;
