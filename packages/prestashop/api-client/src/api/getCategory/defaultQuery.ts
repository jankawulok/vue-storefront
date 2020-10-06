import { gql } from '@apollo/client/core';

export default gql`
query categories(
  $search: String, 
  $filter: CategoryFilterInput, 
  $sort: CategorySortInput, 
  $pageSize: Int, 
  $currentPage: Int
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
      parent {
        id
        url_key
        name
        product_count
        children {
          id
          url_key
          name
          product_count
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
