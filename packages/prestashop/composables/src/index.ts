import useProduct from './useProduct';
import useCategory from './useCategory';
import { setCart, useCart } from './useCart';
import { useUser, setUser } from './useUser';
import useUserOrders from './useUserOrders';
import useContent from './useContent';
import useCheckout from './useCheckout';
import useUrlResolver from './useUrlResolver';
import useAutocomplete from './useAutocomplete';
import useFacet from './useFacet';
import { useWishlist, setWishlist } from './useWishlist';
import { track } from '@vue-storefront/core';

import {
  cartGetters,
  categoryGetters,
  checkoutGetters,
  facetGetters,
  productGetters,
  userGetters,
  wishlistGetters
} from './getters';

track('VSFPrestashop');

export {
  useCategory,
  useProduct,
  useCart,
  setCart,
  useUser,
  setUser,
  useUserOrders,
  useContent,
  useCheckout,
  useFacet,
  cartGetters,
  categoryGetters,
  checkoutGetters,
  facetGetters,
  productGetters,
  userGetters,
  wishlistGetters,
  useUrlResolver,
  useAutocomplete,
  useWishlist,
  setWishlist
};

export * from './types/GraphQL';
