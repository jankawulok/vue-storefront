import { CustomerMutationResponse } from './../../types/Api';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutation';

const customerLogout = async (): Promise<CustomerMutationResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    fetchPolicy: 'no-cache'
  });
};

export default customerLogout;
