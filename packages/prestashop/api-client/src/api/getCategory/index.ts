import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { apolloClient } from './../../index';
import { CategorySearch } from './../../types/Api';

import {
  Categories
} from './../../types/GraphQL';
import defaultQuery from './defaultQuery';

interface CategoryData {
    categories: Categories;
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
  return await apolloClient.query<CategoryData>({
    query: defaultQuery,
    variables: search
  });
};

export default getCategory;
