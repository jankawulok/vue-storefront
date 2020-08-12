import { apolloClient } from '../../index';
import gql from 'graphql-tag';
import { CustomerResponse } from '../../types/Api';
import { ApolloQueryResult } from 'apollo-client';
import { CustomerParams } from './../../types/Api';
import defaultQuery from './defaultQuery';
import withOrders from './withOrders';

const getMe = async (
  params: CustomerParams
): Promise<ApolloQueryResult<CustomerResponse>> => {
  if (!params) {
    return await apolloClient.query({
      query: defaultQuery,
      variables: {},
      fetchPolicy: 'no-cache'
    });
  }
  if (params.customQuery) {
    const { query, variables } = params.customQuery;
    return await apolloClient.query({
      query: gql`${query}`,
      variables,
      fetchPolicy: 'no-cache'
    });
  }
  if (!params.withOrders) {
    return await apolloClient.query({
      query: withOrders,
      variables: {},
      fetchPolicy: 'no-cache'
    });
  }

};

export default getMe;
