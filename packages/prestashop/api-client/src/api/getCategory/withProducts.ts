import gql from 'graphql-tag';
import { ProductFragment } from './../../fragments';

export default gql`
${ProductFragment}
query categories(
  $search: String, 
  $filter: CategoryFilterInput, 
  $sort: CategorySortInput, 
  $pageSize: Int, 
  $currentPage: Int
  $productSearch: String
  $productFilter: ProductFilterInput
  $productPostFilter: ProductFilterInput
  $productPageSize: Int
  $productCurrentPage: Int
  $productSort: ProductSortInput
  $productAggregation:  ProductAggregationInput
  ) {
  categories(search: $search, filter: $filter, sort: $sort, pageSize: $pageSize, currentPage: $currentPage) {
    items {
      id
      url_key
      name
      product_count
      description
      breadcrumbs {
        category_id
        name
        slug
      }
      products(search: $productSearch, filter: $productFilter, postFilter: $productPostFilter, sort: $productSort, pageSize: $productPageSize, currentPage: $productCurrentPage, aggregation: $productAggregation) {
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
      children {
        id
        url_key
        name
        product_count
      }

    }
  }
}
`;
