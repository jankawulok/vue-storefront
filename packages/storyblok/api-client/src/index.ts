import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SetupConfig, SetupResponse } from '../src/types/Setup';
import getPageItems from './api/getPageItems';
import getPageItem from './api/getPageItem';
import getContentItem from './api/getContentItem';
import fetch from 'isomorphic-fetch';

let client: ApolloClient<any> = null;

const setup = <TCacheShape>(setupConfig?: SetupConfig<TCacheShape>): SetupResponse<TCacheShape> => {
  client = new ApolloClient({
    link: createHttpLink({
      uri: setupConfig.api.uri,
      headers: {
        token: setupConfig.api.token,
        version: setupConfig.api.version
      },
      fetch
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network'
      }
    },
    ...setupConfig.customOptions
  });
  return { client };
};

export {
  client,
  setup,
  getPageItems,
  getPageItem,
  getContentItem
};
