import { Order } from '../types/GraphQL';
import { UseUserOrdersFactoryParams } from '@vue-storefront/core';
import { getMe } from '@jkawulok/prestashop-api';

import { OrderSearchParams } from '../types';

export const params: UseUserOrdersFactoryParams<Order, OrderSearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchOrders: async (params: OrderSearchParams = {}) => {
    const result = await getMe({params: { withOrders: true }});
    const { result: data, total } = result.data?.customer.orders || { results: [], total: 0};
    return { data, total };
  }
};
