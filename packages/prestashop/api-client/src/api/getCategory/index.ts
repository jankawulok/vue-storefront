import { ApolloQueryResult } from '@apollo/client';
import { gql } from '@apollo/client/core';
import { apolloClient } from './../../index';
import { CategorySearch } from './../../types/Api';

import {
  Categories,
  Category
} from './../../types/GraphQL';
import defaultQuery from './defaultQuery';
import withProducts from './withProducts';
import navigationQuery from './navigation';

interface CategoryData {
    categories?: Categories;
    category?: Category;
  }

const getCategory = async (
  search?: CategorySearch
): Promise<ApolloQueryResult<CategoryData>> => {
  if (!search) {
    return await apolloClient.query<CategoryData>({
      query: defaultQuery
    });
  }
  if (search.customQuery) {
    const { query, variables } = search.customQuery;

    return await apolloClient.query<CategoryData>({
      query: gql`${query}`,
      variables
    });
  }
  if (search.withProducts) {
    return await apolloClient.query<CategoryData>({
      query: gql`${withProducts}`,
      variables: search
    });
  }
  if (search.navigation) {
    return await apolloClient.query<CategoryData>({
      query: gql`${navigationQuery}`,
      variables: search
    });
  }
  return await apolloClient.query<CategoryData>({
    query: defaultQuery,
    variables: search
  });
};

export default getCategory;
