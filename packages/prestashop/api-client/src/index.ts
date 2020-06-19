import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
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

const locale = 'pl';
const currency = 'PLN';
const country = 'PL';
const countries = [];
const currencies = [];
const locales = [];

const setup = <TCacheShape>(setupConfig?: SetupConfig<TCacheShape>): ApolloClient<TCacheShape> => {

  apolloClient = new ApolloClient({
    link: createHttpLink({
      uri: setupConfig.api.storefrontUri,
      headers: {
        credentials: 'include'
      },
      credentials: 'include',
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
  return apolloClient;
};

export {
  apolloClient,
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
  locale,
  locales,
  country,
  countries,
  currency,
  currencies,
  getUrlResolver
};
