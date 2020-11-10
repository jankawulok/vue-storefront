/* istanbul ignore file */
import { UseCheckout } from '@vue-storefront/core';
import VueCompositionAPI, { ref, Ref, computed } from '@vue/composition-api';
import { Customer, Address, ShippingMethod } from './../types/GraphQL';
import Vue from 'vue';

// We need to register it again because of Vue instance instantiation issues
Vue.use(VueCompositionAPI);

const PAYMENT_METHODS_MOCK = [
  {
    label: 'Visa Debit',
    value: 'debit'
  },
  {
    label: 'MasterCard',
    value: 'mastercard'
  },
  {
    label: 'Visa Electron',
    value: 'electron'
  },
  {
    label: 'Cash on delivery',
    value: 'cash'
  },
  {
    label: 'Check',
    value: 'check'
  }
];

const paymentMethods: Ref<any[]> = ref(PAYMENT_METHODS_MOCK);
const shippingMethods: Ref<any[]> = ref([]);
const personalDetails: Ref<Customer> = ref();
const shippingDetails: Ref<Address> = ref();
const billingDetails: Ref<Address> = ref();
const chosenPaymentMethod: Ref<string> = ref('');
const chosenShippingMethod: Ref<ShippingMethod> = ref();
const placeOrder = async () => {};

const useCheckout: () => UseCheckout<any, ShippingMethod[], any, any, any, any, any, any> = () => {
  return {
    paymentMethods,
    shippingMethods,
    personalDetails,
    shippingDetails,
    billingDetails,
    chosenPaymentMethod,
    chosenShippingMethod,
    placeOrder,
    loading: computed(() => false)
  };
};

export default useCheckout;
