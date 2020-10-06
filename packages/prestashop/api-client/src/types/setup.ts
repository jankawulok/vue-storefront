import { ApolloClientOptions } from '@apollo/client';

export interface ApiConfig {
  uri: string;
  imgUri: string;
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

