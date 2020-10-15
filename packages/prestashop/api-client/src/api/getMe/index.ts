import { apolloClient } from '../../index';
import defaultQuery from './defaultQuery';
import { Customer } from './../../types/GraphQL';

interface CustomerData {
  customer: Customer;
}

const getMe = async () => {
  const request = await apolloClient.query<CustomerData>({
    query: defaultQuery,
    variables: {},
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getMe;
