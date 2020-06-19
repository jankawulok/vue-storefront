import { CartMutationResponse } from './../../types/Api';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutatuion';

const removeCoupon = async (): Promise<CartMutationResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    fetchPolicy: 'no-cache'
  });
};

export default removeCoupon;
