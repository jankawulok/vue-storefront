import {
  personalDetails,
  shippingDetails,
  billingDetails,
  initialDetails,
  isShippingAddressCompleted,
  isBillingAddressCompleted,
  isPersonalDetailsCompleted,
  chosenShippingMethod
} from './shared';
import { Cart } from '../types/GraphQL';

const initFields = (cart: Cart) => {
  personalDetails.value.email = cart.id_customer;
  shippingDetails.value = { ...initialDetails, ...shippingDetails.value, ...cart.deliveryAddress };
  billingDetails.value = cart.invoiceAddress || initialDetails;
  isShippingAddressCompleted.value = Boolean(cart.deliveryAddressId);
  isBillingAddressCompleted.value = Boolean(cart.invoiceAddressId);
  isPersonalDetailsCompleted.value = Boolean(cart.id_customer);
  chosenShippingMethod.value = cart.selectedShippingMethod || {};
};

export default initFields;
