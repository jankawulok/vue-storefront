import { gql } from '@apollo/client/core';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  query {
    cart {
      ...DefaultCart
    }
  }
`;
