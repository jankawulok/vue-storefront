import { gql } from '@apollo/client/core';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  mutation removeCoupon{
  cart: removeCoupon {
    ...DefaultCart
  }
}
`;
