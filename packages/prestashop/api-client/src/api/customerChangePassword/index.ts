import { CustomerChangePasswordResponse } from './../../types/Api';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutation';

const customerChangePassword = async (input: {currentPassword: string; newPassword: string}): Promise<CustomerChangePasswordResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    variables: input,
    fetchPolicy: 'no-cache'
  });
};

export default customerChangePassword;
