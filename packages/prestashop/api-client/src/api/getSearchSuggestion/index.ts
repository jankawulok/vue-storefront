import { ApolloQueryResult } from '@apollo/client';
import { apolloClient } from './../../index';
import { SearchSuggestionResult } from './../../types/GraphQL';
import defaultQuery from './defaultQuery';

interface SearchSuggestionData {
  searchSuggestion: SearchSuggestionResult;
}

const getSearchSuggestion = async (
  query: string
): Promise<ApolloQueryResult<SearchSuggestionData>> => {
  return await apolloClient.query<SearchSuggestionData>({
    query: defaultQuery,
    variables: { query: query }
  });
};

export default getSearchSuggestion;
