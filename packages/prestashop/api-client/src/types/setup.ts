import { ApolloClientOptions } from 'apollo-client';

export interface ApiConfig {
  endpoint: string;
  scopes: string[];
}

export interface SetupConfig<TCacheShape> {
  api?: ApiConfig;
  customOptions?: ApolloClientOptions<TCacheShape>;
}

