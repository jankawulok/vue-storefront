import { gql } from '@apollo/client/core';

export default gql`
  mutation customerChangePassword($currentPassword: String, $newPassword: String) {
    customerChangePassword(currentPassword: $currentPassword, newPassword: $newPassword) 
  }
`;
