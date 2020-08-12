import { Order } from '../types/GraphQL';
import { useUserOrdersFactory } from '@vue-storefront/core';
import { OrderSearchParams } from '../types';

import { params } from './factoryParams';

const useUserOrders: () => any = useUserOrdersFactory<Order, OrderSearchParams>(params);

export default useUserOrders;
