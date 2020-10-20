import { UseUserFactoryParams } from '@vue-storefront/core';
import {
  customerLogin,
  customerLogout,
  customerCreate,
  customerChangePassword,
  getMe,
  getCart
} from '@jkawulok/prestashop-api';
import { setCart } from '../useCart';
import { Customer } from '../types/GraphQL';
// @todo useUser

export const params: UseUserFactoryParams<Customer, any, any> = {
  loadUser: async () => {
    try {
      const profile = await getMe();
      return profile.data.customer;
    } catch (err) {
      const error = err.graphQLErrors
        ? err.graphQLErrors[0].message
        : err.message;
      throw new Error(error);
    }
  },
  logOut: async () => {
    await customerLogout();
    const cartResponse = await getCart();
    setCart(cartResponse.data.cart);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async ({ currentUser, updatedUserData }): Promise<any> => {
    // @todo
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async ({ email, password, firstName, lastName }) => {
    const customerRegisterResponse = customerCreate({
      email,
      password,
      firstname: firstName,
      lastname: lastName
    });
    return (await customerRegisterResponse).data.customer;
  },
  logIn: async ({ username, password }) => {
    const credentials = { email: username, password };
    const user = await customerLogin(credentials);
    setCart(user.data.customerLogin.cart);
    return user.data.customerLogin.customer;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async function changePassword({
    currentUser,
    currentPassword,
    newPassword
  }) {
    try {
      await customerChangePassword({ currentPassword, newPassword });
      return currentUser;
    } catch (err) {
      console.error(err.graphQLErrors ? err.graphQLErrors[0].message : err);
    }
  }
};
