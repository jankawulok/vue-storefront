import { client, recombee } from '../../index';
import { useProductFactory, SearchResult } from '@vue-storefront/core';
import { UseProduct, Product } from '../../types';

const productsSearch = async (params): Promise<SearchResult<Product>> => {
  const searchParams = {
    ids: params.ids,
    with: params.term,
    where: params.term,
    sort: params.sort,
    page: params.pagination.page,
    masterKey: '',
    term: params.term
  };

  const products = await client.send( new recombee.re)
  return {
    data: products,
    total: products.length
  };
};

const useProduct: (cacheId: string) => UseProduct<Product> = useProductFactory<Product, any>({
  productsSearch
});

export default useProduct;
