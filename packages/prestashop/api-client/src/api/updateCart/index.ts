import { CartMutationResponse } from './../../types/Api';
import { CartUpdateAction } from './../../types/GraphQL';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutation';

const updateCart = async (actions: CartUpdateAction): Promise<CartMutationResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    variables: {actions: actions},
    fetchPolicy: 'no-cache'
  });
};

export default updateCart;
