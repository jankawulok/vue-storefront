import { ApolloQueryResult } from 'apollo-client';
import { catalogClient } from './../../index';
import { EntityUrl } from './../../types/GraphQlCatalog';
import defaultQuery from './defaultQuery';

interface UrlResolverData {
  urlResolver: EntityUrl;
}

const getUrlResolver = async (
  url: string
): Promise<ApolloQueryResult<UrlResolverData>> => {
  return await catalogClient.query<UrlResolverData>({
    query: defaultQuery,
    variables: {url: url}
  });
};

export default getUrlResolver;
