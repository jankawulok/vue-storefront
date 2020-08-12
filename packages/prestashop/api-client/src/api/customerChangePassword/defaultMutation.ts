import gql from 'graphql-tag';

export default gql`
  mutation customerChangePassword($currentPassword: String, $newPassword: String) {
    customerChangePassword(currentPassword: $currentPassword, newPassword: $newPassword) 
  }
`;
