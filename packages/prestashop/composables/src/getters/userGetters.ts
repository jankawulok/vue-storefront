import { UserGetters} from '@vue-storefront/core';
import { Customer } from './../types/GraphQL';

export const getUserFirstName = (user: Customer): string => user ? user.firstname : '';

export const getUserLastName = (user: Customer): string => user ? user.lastname : '';

export const getUserFullName = (user: Customer): string => user ? `${user.firstname} ${user.lastname}` : '';

export const getUserEmail = (user: Customer): string => user ? user.email : '';

const userGetters: UserGetters<Customer> = {
  getFirstName: getUserFirstName,
  getLastName: getUserLastName,
  getFullName: getUserFullName,
  getEmail: getUserEmail
};

export default userGetters;
