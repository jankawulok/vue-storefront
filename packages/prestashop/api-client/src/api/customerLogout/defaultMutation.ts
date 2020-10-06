import { gql } from '@apollo/client/core';
import { CustomerFragment } from './../../fragments';

export default gql`
  ${CustomerFragment}
  mutation customerLogout {
    customerLogout {
      message
      customer {
        ...DefaultCustomer
      }
    }
  }	
`;
