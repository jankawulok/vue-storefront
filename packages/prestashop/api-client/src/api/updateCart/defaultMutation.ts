import { gql } from '@apollo/client/core';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}
  mutation cartUpdate($actions: CartUpdateAction){
  cart: cartUpdate(actions: $actions) {
    ...DefaultCart
  }
}
`;
