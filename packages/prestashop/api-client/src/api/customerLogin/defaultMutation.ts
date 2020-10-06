import { gql } from '@apollo/client/core';
import { CustomerFragment, CartFragment } from './../../fragments';

export default gql`
  ${CustomerFragment}
  ${CartFragment}
  
  mutation customerLogin($email: String, $password: String) {
    customer: customerLogin(email: $email, password: $password) {
      customer {
        ...DefaultCustomer
      }
      cart {
        ...DefaultCart
      }
    }
  }
`;
