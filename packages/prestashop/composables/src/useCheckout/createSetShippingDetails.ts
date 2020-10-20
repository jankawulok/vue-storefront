/* eslint-disable @typescript-eslint/no-unused-vars */

import { updateCart, cartActions } from '@jkawulok/prestashop-api';
import { shippingDetails, loading } from './shared';
import initFields from './initFields';

const initialDetails = { contactInfo: {} };

const createSetShippingDetails = ({ factoryParams, cartFields, setCart }) => async (data, options: any = {}) => {
  shippingDetails.value = {
    ...initialDetails,
    ...shippingDetails.value,
    ...data,
    contactInfo: {
      ...initialDetails.contactInfo,
      ...shippingDetails.value.contactInfo,
      ...data.contactInfo
    }
  };

  if (!options.save) {
    return;
  }

  loading.value.shippingAddress = true;
  const cartResponse = await updateCart(
    {
      actions: [
        cartActions.setShippingAddressAction(shippingDetails.value, 1)
      ]
    }
  );

  setCart(cartResponse.data);
  initFields(cartResponse.data.cartUpdate);
  loading.value.shippingAddress = false;
};

export default createSetShippingDetails;
