import { apolloClient } from '../../index';
import { CustomerResponse } from '../../types/Api';
import defaultQuery from './defaultQuery';

const getMe = async (): Promise<CustomerResponse> => {
  return await apolloClient.query({
    query: defaultQuery,
    variables: {},
    fetchPolicy: 'no-cache'
  });
};

export default getMe;
