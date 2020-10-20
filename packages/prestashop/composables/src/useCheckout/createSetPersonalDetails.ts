/* eslint-disable @typescript-eslint/no-unused-vars */

import { updateCart, cartActions } from '@jkawulok/prestashop-api';
import { personalDetails, loading} from './shared';
import initFields from './initFields';

const createSetPersonalDetails = ({ factoryParams, setShippingDetails, cartFields, setCart }) => async (data, options: any = {}) => {
  personalDetails.value = { ...personalDetails.value, ...data };
  const { firstname, lastname } = personalDetails.value;

  if (!options.save) return;
  loading.value.personalDetails = true;
  loading.value.personalDetails = false;
};

export default createSetPersonalDetails;
