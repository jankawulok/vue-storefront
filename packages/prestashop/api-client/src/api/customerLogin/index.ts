import { CustomerLoginResponse } from './../../types/Api';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutation';

const customerLogin = async (input: {email: string; password: string}): Promise<CustomerLoginResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    variables: input,
    fetchPolicy: 'no-cache'
  });
};

export default customerLogin;
