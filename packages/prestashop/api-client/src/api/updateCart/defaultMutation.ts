import gql from 'graphql-tag';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}
  mutation cartUpdate($actions: CartUpdateAction){
  cart: cartUpdate(actions: $actions) {
    ...DefaultCart
  }
}
`;
