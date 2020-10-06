import { gql } from '@apollo/client/core';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  mutation applyCoupon($coupon: String){
  cart: applyCoupon(coupon: $coupon) {
    ...DefaultCart
  }
}
`;
