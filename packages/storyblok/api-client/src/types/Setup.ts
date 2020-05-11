import { ApolloClientOptions, ApolloClient } from 'apollo-client';

export interface SetupConfig<TCacheShape> {
  api?: ApiConfig;
  customOptions?: ApolloClientOptions<TCacheShape>;
}

export interface SetupResponse<TCacheShape> {
    client: ApolloClient<TCacheShape>;
}

export interface ApiConfig {
  uri: string;
  token: string;
  version: string;
}
