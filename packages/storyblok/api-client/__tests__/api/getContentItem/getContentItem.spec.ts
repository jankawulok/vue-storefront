/* eslint-disable camelcase, @typescript-eslint/camelcase */
import gql from 'graphql-tag';
import getContentItem from '../../../src/api/getContentItem';
import { client } from '../../../src/index';
import defaultQuery from '../../../src/api/getContentItem/defaultQuery';

describe('[storyblok-api-client] getContentItem', () => {

  it('fetches ContentItem without search parameters', async () => {
    const givenVariables = {};

    (client.query as any).mockImplementation(({ variables, query }) => {
      expect(variables).toEqual(givenVariables);
      expect(query).toEqual(defaultQuery);

      return { data: 'ContentItem response' };
    });

    const { data } = await getContentItem({});

    expect(data).toBe('ContentItem response');
  });

  it('fetches categories with default query', async () => {
    const givenVariables = { variables: { by_uuids: '549bafed-e2bc-4fe8-8b2e-0130192011af' } };

    (client.query as any).mockImplementation(({ variables, query }) => {

      expect(variables).toEqual(givenVariables);
      expect(query).toEqual(defaultQuery);

      return { data: 'ContentItem response' };
    });

    const { data } = await getContentItem({variables: {by_uuids: '549bafed-e2bc-4fe8-8b2e-0130192011af'}});
    expect(data).toBe('ContentItem response');
  });

  it('fetches categories with customized query', async () => {
    const givenVariables = {
      by_uuids: '549bafed-e2bc-4fe8-8b2e-0130192011af'
    };

    const givenQuery = `
      query ContentNodes($by_uuids: String) {
        ContentNodes(by_uuids: $by_uuids) {
          items {
            content
          }
        }
      }
    `;

    (client.query as any).mockImplementation(({ variables, query }) => {
      expect(variables).toEqual(givenVariables);
      expect(query).not.toEqual(defaultQuery);
      expect(query).toEqual(gql`${givenQuery}`);

      return { data: 'ContentItem response' };
    });

    const { data } = await getContentItem({ customQuery: { query: givenQuery,
      variables: givenVariables} });
    expect(data).toBe('ContentItem response');
  });
});
