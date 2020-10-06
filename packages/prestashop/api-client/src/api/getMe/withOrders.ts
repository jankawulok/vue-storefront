import { gql } from '@apollo/client/core';

const customer = gql`
  query {
    customer {
      orders {
        result {
          id_order
          reference
          payment
          current_state
          total_paid
          total_products
          products {
            product_id
            product_quantity
          }
          invoiceAddress {
            id
            alias
            address1
            address2
            city
            postcode
            phone
            dni
          }
          deliveryAddress {
            id
            alias
            address1
            address2
            city
            postcode
            phone
          }
        }
      }
    }
  }
`;

export default customer;
