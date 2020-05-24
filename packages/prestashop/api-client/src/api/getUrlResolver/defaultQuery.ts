import gql from 'graphql-tag';

export default gql`
query urlResolver(
  $url: String!
  ) {
    urlResolver(url: $url) {
    type
  }
}
`;
