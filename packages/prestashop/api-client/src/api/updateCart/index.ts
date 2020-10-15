import { CartMutationResponse } from './../../types/Api';
import { CartUpdateAction } from './../../types/GraphQL';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutation';

interface UpdateCart {
  actions: CartUpdateAction[];
}

const updateCart = async (params: UpdateCart): Promise<CartMutationResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    variables: { actions: params.actions },
    fetchPolicy: 'no-cache'
  });
};

export default updateCart;
