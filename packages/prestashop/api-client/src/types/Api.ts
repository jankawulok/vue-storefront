import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import {
  ProductFilterInput,
  ProductSortInput,
  CategoryFilterInput,
  CategorySortInput,
  Cart,
  CustomerLoginResponse,
  Customer
} from './GraphQL';

export interface CustomQuery {
  query: string;
  variables: any;
}

export interface BaseSearch {
  customQuery?: CustomQuery;
  search?: string;
  pageSize?: number;
  currentPage?: number;
}

export interface ProductSearch extends BaseSearch {
  filter?: ProductFilterInput;
  sort?: ProductSortInput;
}

export interface CategorySearch extends BaseSearch {
  filter?: CategoryFilterInput;
  sort?: CategorySortInput;
  withProducts?: boolean;
  navigation?: boolean;
}

export interface CustomerParams {
  customQuery?: CustomQuery;
  withOrders?: boolean;
}

export interface FilterOption {
  label: string;
  value: string | number | boolean | [number, number] | [string, string];
  selected: boolean;
}

export type QueryResponse<K extends string, V> = ApolloQueryResult<
  Record<K, V>
>;
export type CartQueryResponse = QueryResponse<'cart', Cart>
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;
export type CartMutationResponse = MutationResponse<'cartUpdate', Cart>
export type SetShippingAddressOnCartResponse = MutationResponse<'setShippingAddress', Cart>
export type SetInvoiceAddressOnCartResponse = MutationResponse<'setInvoiceAddress', Cart>
export type CustomerMutationResponse = MutationResponse<'customer', Customer>
export type ApiCustomerLoginResponse = MutationResponse<
  'customerLogin',
  CustomerLoginResponse
>;
export type CustomerResponse = QueryResponse<'customer', Customer>
export type CustomerChangePasswordResponse = MutationResponse<'customerChangePassword', boolean>
