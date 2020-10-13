import { apiClientFactory } from '@vue-storefront/core';
import {
  ApolloClient,
  defaultDataIdFromObject,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core';
// import { InMemoryCache } from '@apollo/client/cache';
import { Config, ConfigurableConfig } from './types/setup';
import getProduct from './api/getProduct';
import getCategory from './api/getCategory';
import addToCart from './api/addToCart';
import removeFromCart from './api/removeFromCart';
import applyCoupon from './api/applyCoupon';
import removeCoupon from './api/removeCoupon';
import customerLogin from './api/customerLogin';
import customerCreate from './api/customerCreate';
import customerLogout from './api/customerLogout';
import updateCart from './api/updateCart';
import getMe from './api/getMe';
import getCart from './api/getCart';
import getUrlResolver from './api/getUrlResolver';
import getSearchSuggestion from './api/getSearchSuggestion';
import fetch from 'isomorphic-fetch';

let apolloClient: ApolloClient<any> = null;

const { setup, update, getSettings } = apiClientFactory<Config, ConfigurableConfig>({
  defaultSettings: {
    locale: 'pl',
    acceptLanguage: ['pl']
  },
  onSetup: (config: Config) => {
    // todo: add possibility to override
    apolloClient = new ApolloClient({
      link: createHttpLink({
        uri: config.api.uri,
        headers: {
          credentials: 'include'
        },
        credentials: 'include',
        fetch
      }),
      cache: new InMemoryCache({
        dataIdFromObject: (object) => {
          switch (object.__typename) {
            case 'Product':
              return `Product:${(object as any).url_key}`;
            case 'Category':
              return `Category:${(object as any).url_key}`;
            default:
              defaultDataIdFromObject(object);
          }
        }
      }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only'
        }
      },
      ...config.customOptions
    });
  }
});

export {
  apolloClient,
  getSettings,
  getProduct,
  getCategory,
  getCart,
  updateCart,
  addToCart,
  removeFromCart,
  applyCoupon,
  removeCoupon,
  customerLogin,
  customerLogout,
  customerCreate,
  getMe,
  setup,
  update,
  getSearchSuggestion,
  getUrlResolver
};

export * from './types/Api';
export * from './types/GraphQL';
export * from './types/setup';
export * as cartActions from './helpers/cart/actions';
