import gql from 'graphql-tag';
import { ProductFragment } from './../../fragments';

export default gql`
  ${ProductFragment}
  query products(
      $search: String
      $filter: ProductFilterInput
      $pageSize: Int
      $currentPage: Int
      $sort: ProductSortInput
    ){
    products(search: $search, filter: $filter, sort: $sort, pageSize: $pageSize, currentPage: $currentPage, aggregation: $aggregation) {
      total_count {
        value
        relation
      }
      available_filters {
        count
        label
        attribute_code
        options {
          count
          label
          value
          image
          color
        }
      }
      items {
        ...ProductFragment
      }
    }
  }
`;
