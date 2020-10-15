import { getSearchSuggestion } from '@jkawulok/prestashop-api';
import { Ref } from '@vue/composition-api';
import { sharedRef } from '@vue-storefront/core';

import { SearchSuggestionResult } from './../types/GraphQL';

type Search = (String) => Promise<void>;

interface AutocompleteSearchParams {
  term: string;
  chars?: number;
  limit?: number;
}
interface UseSearch {
  loading: Ref<boolean>;
  error: Ref<boolean>;
  suggestions: Ref<SearchSuggestionResult>;
  search: Search;
}

export default function useAutocomplete(id: string): UseSearch {
  const loading: Ref<boolean> = sharedRef(false, `useSearch-loading-${id}`);
  const error = sharedRef(null, `useSearch-error-${id}`);
  const suggestions: Ref<SearchSuggestionResult> = sharedRef(
    null,
    `useSearch-suggestion-${id}`
  );
  const search = async (params: AutocompleteSearchParams) => {
    loading.value = true;
    const response = await getSearchSuggestion(params.term);
    suggestions.value = response.data.searchSuggestion;
    loading.value = false;
  };
  return {
    search,
    loading,
    error,
    suggestions
  };
}
