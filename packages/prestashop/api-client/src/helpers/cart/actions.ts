/* eslint-disable @typescript-eslint/camelcase, camelcase */

import { CartItemInput, DeliveryAddressInput, InvoiceAddressInput, Address, CarrierInput } from '../../types/GraphQL';

export const createAddItemsToCartAction = (product: CartItemInput) => ({
  id: product.id,
  id_product_attribute: 0,
  quantity: product.quantity
});

export const setShippingAddressAction = (shippingDetails: Address, idAddress: number): { setDeliveryAddress: DeliveryAddressInput } => ({
  setDeliveryAddress: {
    idAddress: idAddress,
    address: {
      alias: shippingDetails.alias,
      firstname: shippingDetails.firstname,
      lastname: shippingDetails.lastname,
      address1: shippingDetails.address1,
      address2: shippingDetails.address2,
      postcode: shippingDetails.postcode,
      city: shippingDetails.city,
      phone: shippingDetails.phone,
      country_code: shippingDetails.country_code
    }
  }
});

export const setInvoiceAddressAction = (billingDetails: Address, idAddress: number): { setInvoiceAddress: InvoiceAddressInput } => ({
  setInvoiceAddress: {
    idAddress: idAddress,
    address: {
      alias: billingDetails.alias,
      firstname: billingDetails.firstname,
      lastname: billingDetails.lastname,
      address1: billingDetails.address1,
      address2: billingDetails.address2,
      postcode: billingDetails.postcode,
      city: billingDetails.city,
      phone: billingDetails.phone,
      country_code: billingDetails.country_code
    }
  }
});

export const setShippingMethodAction = (shippingMethodId?: number): { setCarrier: CarrierInput } => ({
  setCarrier: {
    idCarrier: shippingMethodId
  }
});

export const addDiscountCodeAction = (code: string): { applyCoupon: string } => ({
  applyCoupon: code
});

export const removeDiscountCodeAction = (): {removeDiscountCode: boolean} => ({
  removeDiscountCode: true
});
