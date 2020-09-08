import { getUrlResolver } from '@jkawulok/prestashop-api';
import { Ref } from '@vue/composition-api';
import { sharedRef } from '@vue-storefront/core';

import { EntityUrl } from './../types/GraphQL';

type Search = (String) => Promise<void>;

interface UseUrlResolver {
  loading: Ref<boolean>;
  error: Ref<boolean>;
  entity: Ref<EntityUrl>;
  search: Search;
}

export default function useUrlResolver (id: string): UseUrlResolver {
  const loading: Ref<boolean> = sharedRef(false, `useUrlReslover-loading-${id}`);
  const error = sharedRef(null, `useUrlResolver-error-${id}`);
  const entity: Ref<EntityUrl> = sharedRef(null, `useUrlReslover-entity-${id}`);
  const search = async (url: string) => {
    loading.value = true;
    const response = await getUrlResolver(url);
    entity.value = response.data.urlResolver;
    loading.value = false;
  };
  return {
    search,
    loading,
    error,
    entity
  };
}
