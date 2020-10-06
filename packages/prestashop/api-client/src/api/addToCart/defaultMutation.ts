import { gql } from '@apollo/client';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  mutation addItemsToCart($input: AddItemsToCartInput){
  cart: addItemsToCart(input: $input) {
    ...DefaultCart
  }
}
`;
