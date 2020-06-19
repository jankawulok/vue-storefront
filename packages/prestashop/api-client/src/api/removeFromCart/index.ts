import { CartMutationResponse } from './../../types/Api';
import { RemoveItemFromCartInput } from './../../types/GraphQL';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutation';

const addToCart = async (removeItemFromCartInput: RemoveItemFromCartInput): Promise<CartMutationResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    variables: {input: removeItemFromCartInput},
    fetchPolicy: 'no-cache'
  });
};

export default addToCart;
