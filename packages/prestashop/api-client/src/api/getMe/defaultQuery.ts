import { gql } from '@apollo/client/core';

const customer = gql`
  query {
    customer {
      isAuthenticated
      firstname
      lastname
      email
    }
  }
`;

export default customer;
