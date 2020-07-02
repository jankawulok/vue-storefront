/* istanbul ignore file */

import { useUserFactory, UseUserFactoryParams } from '@vue-storefront/core';
import { customerLogin, customerLogout } from '@jkawulok/prestashop-api';
import { Customer } from '../types/GraphQL';
import { setCart } from '../useCart'
// @todo useUser

const params: UseUserFactoryParams<any, any, any> = {
  loadUser: async () => {
    // @todo
    return {};
  },
  logOut: async () => {
    const user = await customerLogout();
    // setCart()
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async ({currentUser, updatedUserData}): Promise<any> => {
    // @todo
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async ({email, password, firstName, lastName}) => {
    // @todo
    return {};
  },
  logIn: async ({ username, password }) => {
    const credentials = { email: username, password };
    const user = await customerLogin(credentials);
    return user.data.customer.customer;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async function changePassword({currentUser, currentPassword, newPassword}) {
    // @todo
    return {};
  }
};

const { useUser, setUser } = useUserFactory<Customer, any, any>(params);

export { useUser, setUser };
