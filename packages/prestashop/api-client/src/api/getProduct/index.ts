import { ApolloQueryResult } from '@apollo/client';
import gql from 'graphql-tag';
import { apolloClient } from './../../index';
import { ProductSearch } from './../../types/Api';

import {
  Products
} from './../../types/GraphQL';
import defaultQuery from './defaultQuery';

interface ProductData {
  products: Products;
}

const getProduct = async (
  search: ProductSearch
): Promise<ApolloQueryResult<ProductData>> => {
  if (search.customQuery) {
    const { query, variables } = search.customQuery;

    return await apolloClient.query<ProductData>({
      query: gql`${query}`,
      variables
    });
  }
  return await apolloClient.query<ProductData>({
    query: defaultQuery,
    variables: search
  });
};

export default getProduct;
