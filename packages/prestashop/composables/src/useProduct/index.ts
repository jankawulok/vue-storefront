import {AgnosticSortByOption, UseProduct, useProductFactory} from '@vue-storefront/core';
import { ProductsSearchParams } from '../types';
import { Product } from './../types/GraphQL';

import { params } from './factoryParams';

const useProduct: (cacheId: string) => UseProduct<Product, ProductsSearchParams, AgnosticSortByOption[]> = useProductFactory<Product, any, Record<string, any>, AgnosticSortByOption[]>(params);

export default useProduct;
