/* eslint-disable @typescript-eslint/camelcase, camelcase */

import { CartItemInput } from '../../types/GraphQL';

export const createAddItemsToCartAction = (product: CartItemInput) => ({
  id: product.id,
  id_product_attribute: 0,
  quantity: product.quantity
});
