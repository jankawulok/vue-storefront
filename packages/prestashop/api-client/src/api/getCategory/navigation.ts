import { gql } from '@apollo/client/core';

export default gql`
query categories {
  category(root: true) {
    id
    is_root
    url_key
    children {
      is_root
      id
      name
      url_key
      children {
        id
				name
        url_key
        children {
          id
          name
          url_key
          children {
            id
            name
            url_key
            children {
              id
              name
              url_key
            }
          }
        }
      }
    }
  }
}
`;
