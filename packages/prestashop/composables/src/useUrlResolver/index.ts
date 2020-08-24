import { getUrlResolver } from '@jkawulok/prestashop-api';
import { ref, Ref } from '@vue/composition-api';
import { ssrRef } from '@vue-storefront/core';
import { EntityUrl } from './../types/GraphQL';

type Search = (String) => Promise<void>;

interface UseUrlResolver {
  loading: Ref<boolean>;
  error: Ref<boolean>;
  entity: Ref<EntityUrl>;
  search: Search;
}

export default function useUrlResolver (id: string): UseUrlResolver {
  const loading = ssrRef(false, `useUrlResolver-loading-${id}`);
  const error = ssrRef(null, `useUrlResolver-error-${id}`);
  const entity: Ref<EntityUrl> = ssrRef(null, `useUrlResolver-entity-${id}`);
  const search = async (url: string) => {
    loading.value = true;
    const response = await getUrlResolver(url);
    entity.value = response.data.urlResolver;
    loading.value = false;
  };
  return { loading, error, entity, search };
}
