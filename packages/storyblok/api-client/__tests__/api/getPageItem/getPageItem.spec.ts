/* eslint-disable camelcase, @typescript-eslint/camelcase */
import gql from 'graphql-tag';
import getPageItems from '../../../src/api/getPageItems';
import { client } from '../../../src/index';
import defaultQuery from '../../../src/api/getPageItems/defaultQuery';

describe('[storyblok-api-client] getPageItems', () => {

  it('fetches pageItems without search parameters', async () => {
    const givenVariables = {};

    (client.query as any).mockImplementation(({ variables, query }) => {
      expect(variables).toEqual(givenVariables);
      expect(query).toEqual(defaultQuery);

      return { data: 'PageItem response' };
    });

    const { data } = await getPageItems({});

    expect(data).toBe('PageItem response');
  });

  it('fetches categories with default query', async () => {
    const givenVariables = { variables: { by_uuids: '549bafed-e2bc-4fe8-8b2e-0130192011af' } };

    (client.query as any).mockImplementation(({ variables, query }) => {

      expect(variables).toEqual(givenVariables);
      expect(query).toEqual(defaultQuery);

      return { data: 'PageItem response' };
    });

    const { data } = await getPageItems({variables: {by_uuids: '549bafed-e2bc-4fe8-8b2e-0130192011af'}});
    expect(data).toBe('PageItem response');
  });

  it('fetches categories with customized query', async () => {
    const givenVariables = {
      by_uuids: '549bafed-e2bc-4fe8-8b2e-0130192011af'
    };

    const givenQuery = `
    query PageItems(
        $by_uuids: String
      ){
        PageItems(
          first_published_at_gt: $first_published_at_gt,
          first_published_at_lt: $first_published_at_lt,
          starts_with: $starts_with,
          by_uuids: $by_uuids
        ) {
          total
          items {
            id
            created_at
          }
        }
      }
      `;

    (client.query as any).mockImplementation(({ variables, query }) => {
      expect(variables).toEqual(givenVariables);
      expect(query).not.toEqual(defaultQuery);
      expect(query).toEqual(gql`${givenQuery}`);

      return { data: 'category response' };
    });

    const { data } = await getPageItems({ customQuery: { query: givenQuery,
      variables: givenVariables} });
    expect(data).toBe('category response');
  });
});
