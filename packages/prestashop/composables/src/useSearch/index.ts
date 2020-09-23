import { getSearchSuggestion } from '@jkawulok/prestashop-api';
import { Ref } from '@vue/composition-api';
import { sharedRef } from '@vue-storefront/core';

import { SearchSuggestionResult } from './../types/GraphQL';

type Search = (String) => Promise<void>;

interface SearchHistory {
  query: string;
}

interface UseSearch {
  loading: Ref<boolean>;
  error: Ref<boolean>;
  searchHistory: Ref<SearchHistory>;
  suggestion: Ref<SearchSuggestionResult>;
  search: Search;
}

export default function useSearch (id: string): UseSearch {
  const loading: Ref<boolean> = sharedRef(false, `useSearch-loading-${id}`);
  const error = sharedRef(null, `useSearch-error-${id}`);
  const suggestion: Ref<SearchSuggestionResult> = sharedRef(null, `useSearch-suggestion-${id}`);
  const searchHistory: Ref<SearchHistory> = sharedRef(null, `useSearch-history-${id}`);
  const search = async (query: string) => {
    loading.value = true;
    const response = await getSearchSuggestion(query);
    suggestion.value = response.data.urlResolver;
    loading.value = false;
  };
  return {
    search,
    searchHistory,
    loading,
    error,
    suggestion
  };
}
