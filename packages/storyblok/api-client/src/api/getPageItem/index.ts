import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { client } from '../../index';
import { PageItem } from '../../types/GraphQL';
import { PageItemsSearch } from '../../types/Api';
import defaultQuery from './defaultQuery';

const getPageItems = async (
  search?: PageItemsSearch
): Promise<ApolloQueryResult<PageItem>> => {
  if (!search) {
    return await client.query<PageItem>({
      query: defaultQuery
    });
  }
  if (search.customQuery) {
    const { query, variables } = search.customQuery;

    return await client.query<PageItem>({
      query: gql`${query}`,
      variables
    });
  }
  return await client.query<PageItem>({
    query: defaultQuery,
    variables: search
  });
};

export default getPageItems;
