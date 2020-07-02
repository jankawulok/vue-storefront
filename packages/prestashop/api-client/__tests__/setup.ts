import { setup } from './../src/index';

jest.mock('apollo-client');

setup({
  api: {
    endpoint: 'http://catalog.maleomi.pl/graphql',
    scopes: ['']
  }
});
