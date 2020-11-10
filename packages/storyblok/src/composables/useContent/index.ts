import { useContentFactory, UseContent } from '@vue-storefront/core';
import { client } from '../../';
import { SearchParams } from '../../types';

const search = async (params: SearchParams): Promise<any> => {
  const { data } = await client.get(params.slug, params.params);
  return data;
};

const useContent: (cacheId: string) => UseContent<any, any> = useContentFactory<any, any>({
  search
});

export default useContent;
