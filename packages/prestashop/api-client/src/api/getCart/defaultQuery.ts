import gql from 'graphql-tag';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  query {
    cart {
      ...DefaultCart
    }
  }
`;
