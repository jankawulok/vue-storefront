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
