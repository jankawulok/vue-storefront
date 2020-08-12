import gql from 'graphql-tag';

export default gql`
query urlResolver(
  $url: String!
  ) {
    urlResolver(url: $url) {
    type
    result {
      ... on Category {
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
        children {
          id
          url_key
          name
          product_count
        }
      }
      ... on Product {
        name
        url_key
      }
    }
  }
}
`;
