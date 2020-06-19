import { CartMutationResponse } from './../../types/Api';
import { apolloClient } from '../..';
import defaultMutation from './defaultMutatuion';

const applyCoupon = async (coupon: string): Promise<CartMutationResponse> => {
  return await apolloClient.mutate({
    mutation: defaultMutation,
    variables: coupon,
    fetchPolicy: 'no-cache'
  });
};

export default applyCoupon;
