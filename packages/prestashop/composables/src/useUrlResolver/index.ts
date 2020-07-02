import { getUrlResolver } from '@jkawulok/prestashop-api';
import { ref, Ref } from '@vue/composition-api';

import { useSSR } from '@vue-storefront/core';

import { EntityUrl } from './../types/GraphQL';

type Search = (String) => Promise<void>;

interface UseUrlResolver {
  loading: Ref<boolean>;
  error: Ref<boolean>;
  entity: Ref<EntityUrl>;
  search: Search;
}

export default function useUrlResolver (cacheId?: string): UseUrlResolver {
  const { initialState, saveToInitialState } = useSSR(cacheId);
  const loading = ref(false);
  const error = ref(null);
  const entity: Ref<EntityUrl> = ref(initialState || null);
  const search = async (url: string) => {
    if (!initialState) {
      loading.value = true;
    }
    const response = await getUrlResolver(url);
    entity.value = response.data.urlResolver;
    saveToInitialState(entity.value);
    loading.value = false;
  };
  return { loading, error, entity, search };
}
