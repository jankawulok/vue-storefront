import { getProduct } from '@jkawulok/prestashop-api';
import { Product, ProductFilterInput } from './../types/GraphQlCatalog';
import { useProductFactory, ProductsSearchResult, UseProduct } from '@vue-storefront/core';
import { ProductsSearchParams } from '../types';

const productsSearch = async (params: ProductsSearchParams): Promise<ProductsSearchResult<Product, Record<string, ProductFilterInput>>> => {
  const apiSearchParams = {
    ...params
  };

  const productResponse = await getProduct(apiSearchParams);
  const products = productResponse.data.products.items;
  const availableFilters: Record<string, ProductFilterInput> = productResponse.data.products.aggregations;
  return {
    data: products,
    total: productResponse.data.products.total_count.value,
    availableFilters
  };
};

const useProduct: (cacheId: string) => UseProduct<Product, Record<string, ProductFilterInput>> =
  useProductFactory<Product, ProductsSearchParams, Record<string, ProductFilterInput>>({ productsSearch });

export default useProduct;
