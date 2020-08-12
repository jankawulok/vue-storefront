/* eslint-disable @typescript-eslint/no-unused-vars */

import { placeOrder, getCart } from '@jkawulok/prestashop-api';
import initFields from './initFields';
import { loading } from './shared';

const createPlaceOrder = ({ factoryParams, cartFields, setCart }) => async () => {
  loading.value.order = true;
  const { id, version } = cartFields.cart.value;

  const orderResponse = await placeOrder();
  const cartResponse = await getCart();
  setCart(cartResponse.data.cart);
  initFields(cartResponse.data.cart);

  loading.value.order = false;
  return orderResponse.data.order;
};

export default createPlaceOrder;
