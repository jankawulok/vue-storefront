import { setup } from './../src/index';

jest.mock('@apollo/client');

setup({
  api: {
    endpoint: 'https://api.maleomi.pl/gateway',
    scopes: [''],
  },
});
