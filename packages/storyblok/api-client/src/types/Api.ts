import { ApolloQueryResult } from 'apollo-client';
import { QueryTypePageItemsArgs, QueryTypeContentNodesArgs } from './GraphQL';

export interface CustomQuery {
  query: string;
  variables: any;
}

export interface PageItemsSearch {
  customQuery?: CustomQuery;
  variables?: QueryTypePageItemsArgs;
}

export interface ContentItemSearch {
  customQuery?: CustomQuery;
  variables?: QueryTypeContentNodesArgs;
}

export type QueryResponse <K extends string, V> = ApolloQueryResult<Record<K, V>>
