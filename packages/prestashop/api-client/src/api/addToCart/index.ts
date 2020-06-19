import { CartMutationResponse } from './../../types/Api';
import { AddItemsToCartInput } from './../../types/GraphQL';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutation';

const addToCart = async (addItemsToCartInput: AddItemsToCartInput): Promise<CartMutationResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    variables: {input: addItemsToCartInput},
    fetchPolicy: 'no-cache'
  });
};

export default addToCart;
