import { apiClientFactory } from '@vue-storefront/core';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { SetupConfig } from './types/setup';
import getProduct from './api/getProduct';
import getCategory from './api/getCategory';
import addToCart from './api/addToCart';
import removeFromCart from './api/removeFromCart';
import applyCoupon from './api/applyCoupon';
import removeCoupon from './api/removeCoupon';
import customerLogin from './api/customerLogin';
import customerCreate from './api/customerCreate';
import customerLogout from './api/customerLogout';
import getCart from './api/getCart';
import getUrlResolver from './api/getUrlResolver';
import fetch from 'isomorphic-fetch';

let apolloClient: ApolloClient<any> = null;


const { setup, override, update, getSettings } = apiClientFactory<any, any>({
  defaultSettings: {},
  onSetup: <TCacheShape>(setupConfig: SetupConfig<TCacheShape>) => {
    // todo: add possibility to override
    apolloClient = new ApolloClient({
      link: createHttpLink({
        uri: setupConfig.api.endpoint,
        headers: {
          credentials: 'include'
        },
        credentials: 'include',
        fetch
      }),
      cache: new InMemoryCache({
        dataIdFromObject: object => {
          switch (object.__typename) {
            case 'Product': return `Product:${(object as any).url_key}`;
            case 'Category': return `Category:${(object as any).url_key}`;
            default: defaultDataIdFromObject(object);
          }
        }
      }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only'
        }
      },
      ...setupConfig.customOptions
    });
  }
});

export {
  apolloClient,
  getSettings,
  getProduct,
  getCategory,
  getCart,
  addToCart,
  removeFromCart,
  applyCoupon,
  removeCoupon,
  customerLogin,
  customerLogout,
  customerCreate,
  setup,
  getUrlResolver
};
