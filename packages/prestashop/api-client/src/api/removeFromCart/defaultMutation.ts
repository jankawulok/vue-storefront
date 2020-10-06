import { gql } from '@apollo/client/core';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  mutation removeItemFromCart($input: RemoveItemFromCartInput){
    cart: removeItemFromCart(input: $input) {
      ...DefaultCart
    }
  }
`;
