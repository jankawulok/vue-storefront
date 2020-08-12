import { ApolloClientOptions } from 'apollo-client';

export interface ApiConfig {
  endpoint: string;
  scopes: string[];
  imgEndpoint: string;
}

export interface SetupConfig<TCacheShape> {
  api?: ApiConfig;
  customOptions?: ApolloClientOptions<TCacheShape>;
  currency?: string;
  locale?: string;
  country?: string;
  countries?: string[];
  currencies?: string[];
  locales?: string[];
}

