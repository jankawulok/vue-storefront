import { gql } from '@apollo/client/core';
import { CustomerFragment } from './../../fragments';

export default gql`
  ${CustomerFragment}

  mutation customerCreate($input: CustomerInput!) {
    customer: customerRegister(input: $input) {
      customer {
        ...DefaultCustomer
      }
    }
  }
`;
