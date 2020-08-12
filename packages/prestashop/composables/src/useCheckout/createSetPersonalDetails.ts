/* eslint-disable @typescript-eslint/no-unused-vars */

import { updateCart, cartActions } from '@jkawulok/prestashop-api';
import { personalDetails, loading} from './shared';
import initFields from './initFields';

const createSetPersonalDetails = ({ factoryParams, setShippingDetails, cartFields, setCart }) => async (data, options: any = {}) => {
  personalDetails.value = { ...personalDetails.value, ...data };
  const { firstname, lastname } = personalDetails.value;

  if (!options.save) return;
  loading.value.personalDetails = true;

  const cartResponse = await updateCart({
    id: cartFields.cart.value.id,
    version: cartFields.cart.value.version,
    actions: [
      cartActions.setCustomerEmail(personalDetails.value.email)
    ]
  });

  setCart(cartResponse.data.cartUpdate);
  initFields(cartResponse.data.cartUpdate);
  setShippingDetails({ firstname, lastname });
  loading.value.personalDetails = false;
};

export default createSetPersonalDetails;
