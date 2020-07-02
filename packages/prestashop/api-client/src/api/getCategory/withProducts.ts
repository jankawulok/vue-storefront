import gql from 'graphql-tag';

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
