/* eslint-disable @typescript-eslint/no-unused-vars */

import { updateCart, cartActions } from '@jkawulok/prestashop-api';
import { chosenShippingMethod, loading } from './shared';
import initFields from './initFields';

const initialDetails = { contactInfo: {} };

const setShippingMethod = ({ factoryParams, cartFields, setCart }) => async (method, options: any = {}) => {
  chosenShippingMethod.value = method;

  if (!options.save) return;
  loading.value.shippingMethod = true;

  const cartResponse = await updateCart({
    actions: [
      cartActions.setShippingMethodAction(method.id)
    ]
  });

  setCart(cartResponse.data.cartUpdate);
  initFields(cartResponse.data.cartUpdate);
  loading.value.shippingMethod = false;
};

export default setShippingMethod;
