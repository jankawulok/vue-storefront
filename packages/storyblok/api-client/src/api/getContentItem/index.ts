import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { client } from '../../index';
import { ContentItems } from '../../types/GraphQL';
import { ContentItemSearch } from '../../types/Api';
import defaultQuery from './defaultQuery';

const getContentItem = async (
  search?: ContentItemSearch
): Promise<ApolloQueryResult<ContentItems>> => {
  if (!search) {
    return await client.query<ContentItems>({
      query: defaultQuery
    });
  }
  if (search.customQuery) {
    const { query, variables } = search.customQuery;
    return await client.query<ContentItems>({
      query: gql`${query}`,
      variables
    });
  }
  return await client.query<ContentItems>({
    query: defaultQuery,
    variables: search
  });
};

export default getContentItem;
