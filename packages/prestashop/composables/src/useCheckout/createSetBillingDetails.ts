/* eslint-disable @typescript-eslint/no-unused-vars */

import { updateCart, cartActions } from '@jkawulok/prestashop-api';
import { billingDetails, loading } from './shared';
import initFields from './initFields';

const initialDetails = { contactInfo: {} };

const createSetBillingDetails = ({ factoryParams, cartFields, setCart }) => async (data, options: any = {}) => {
  billingDetails.value = {
    ...initialDetails,
    ...billingDetails.value,
    ...data,
    contactInfo: {
      ...initialDetails.contactInfo,
      ...billingDetails.value.contactInfo,
      ...data.contactInfo
    }
  };

  if (!options.save) {
    return;
  }

  loading.value.shippingAddress = true;
  const cartResponse = await updateCart({
    actions: [
      cartActions.setInvoiceAddressAction(billingDetails.value)
    ]
  });

  setCart(cartResponse.data.updateCart);
  initFields(cartResponse.data.updateCart);
  loading.value.billingAddress = false;
};

export default createSetBillingDetails;
