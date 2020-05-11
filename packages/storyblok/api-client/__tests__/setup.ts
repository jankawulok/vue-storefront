import { setup } from './../src/index';

jest.mock('apollo-client');

setup({
  api: {
    token: 'LUoRLQRAKwVwhczfHBwtrQtt',
    uri: 'test',
    version: 'draft'
  }
});
