import useProduct from './useProduct';
import useCategory from './useCategory';
import { setCart, useCart } from './useCart';
import { useUser, setUser } from './useUser';
import useUserOrders from './useUserOrders';
import useContent from './useContent';
import useCheckout from './useCheckout';
import useUrlResolver from './useUrlResolver';
import useSearch from './useSearch';
import { useWishlist, setWishlist } from './useWishlist';
import { track } from '@vue-storefront/core';

import {
  cartGetters,
  categoryGetters,
  checkoutGetters,
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
  cartGetters,
  categoryGetters,
  checkoutGetters,
  productGetters,
  userGetters,
  wishlistGetters,
  useUrlResolver,
  useSearch,
  useWishlist,
  setWishlist
};

export * from './types/GraphQL';
