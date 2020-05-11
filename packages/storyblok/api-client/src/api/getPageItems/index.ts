import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { client } from '../../index';
import { PageItems } from '../../types/GraphQL';
import { PageItemsSearch } from '../../types/Api';
import defaultQuery from './defaultQuery';

const getPageItems = async (
  search?: PageItemsSearch
): Promise<ApolloQueryResult<PageItems>> => {
  if (!search) {
    return await client.query<PageItems>({
      query: defaultQuery
    });
  }
  if (search.customQuery) {
    const { query, variables } = search.customQuery;

    return await client.query<PageItems>({
      query: gql`${query}`,
      variables
    });
  }
  return await client.query<PageItems>({
    query: defaultQuery,
    variables: search
  });
};

export default getPageItems;
