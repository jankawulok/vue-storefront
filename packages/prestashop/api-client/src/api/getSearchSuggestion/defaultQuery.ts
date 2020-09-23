import gql from 'graphql-tag';

export default gql`
query searchSuggestion($query: String!){
  searchSuggestion(query: $query) {
    categoriesAgg {
      key
      doc_count
    }
    products {
      id
      name
      url_key
      image
    }
    categories {
      id
      name
      url_key
    }
    manufacturers {
      id
      name
    }

  }
}
`;
