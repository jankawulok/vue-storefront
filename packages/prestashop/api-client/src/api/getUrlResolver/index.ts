import { ApolloQueryResult } from 'apollo-client';
import { apolloClient } from './../../index';
import { EntityUrl } from './../../types/GraphQL';
import defaultQuery from './defaultQuery';

interface UrlResolverData {
  urlResolver: EntityUrl;
}

const getUrlResolver = async (
  url: string
): Promise<ApolloQueryResult<UrlResolverData>> => {
  return await apolloClient.query<UrlResolverData>({
    query: defaultQuery,
    variables: {url: url}
  });
};

export default getUrlResolver;
