import { CustomerMutationResponse } from './../../types/Api';
import { CustomerInput } from './../../types/GraphQL';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutation';

const customerCreate = async (input: CustomerInput): Promise<CustomerMutationResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    variables: {input: input},
    fetchPolicy: 'no-cache'
  });
};

export default customerCreate;
