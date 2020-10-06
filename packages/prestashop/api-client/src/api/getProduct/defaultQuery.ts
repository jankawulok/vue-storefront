import { gql } from '@apollo/client/core';
import { ProductFragment } from './../../fragments';

export default gql`
  ${ProductFragment}
  query products(
      $search: String
      $filter: ProductFilterInput
      $postFilter: ProductFilterInput
      $pageSize: Int
      $currentPage: Int
      $sort: ProductSortInput
      $aggregation:  ProductAggregationInput
    ){
    products(search: $search, filter: $filter, postFilter: $postFilter, sort: $sort, pageSize: $pageSize, currentPage: $currentPage, aggregation: $aggregation) {
      total_count {
        value
        relation
      }
      available_filters {
        count
        label
        min
        max
        attribute_code
        type
        options {
          count
          label
          value
        }
      }
      items {
        ...ProductFragment
      }
    }
  }
`;
