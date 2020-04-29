import gql from 'graphql-tag';
import { CustomerFragment } from './../../fragments';

export default gql`
  ${CustomerFragment}

  mutation customerLogin($email: String, $password: String) {
    customer: customerLogin(email: $email, password: $password) {
      customer {
        ...DefaultCustomer
      }
    }
  }
`;
