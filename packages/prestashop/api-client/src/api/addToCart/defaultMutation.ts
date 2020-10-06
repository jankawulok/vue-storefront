import { gql } from '@apollo/client/core';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  mutation addItemsToCart($input: AddItemsToCartInput){
  cart: addItemsToCart(input: $input) {
    ...DefaultCart
  }
}
`;
