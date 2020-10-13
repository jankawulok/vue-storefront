import { ApolloClientOptions } from '@apollo/client/core';

export interface ApiConfig {
  uri: string;
  imgUri: string;
}

export interface Config {
  api?: ApiConfig;
  customOptions?: ApolloClientOptions<any>;
  currency?: string;
  locale?: string;
  country?: string;
  countries?: string[];
  currencies?: string[];
  locales?: string[];
}

export interface ConfigurableConfig {
  api?: ApiConfig;
  customOptions?: ApolloClientOptions<any>;
  currency?: string;
  locale?: string;
  country?: string;
  countries?: string[];
  currencies?: string[];
  locales?: string[];
}
