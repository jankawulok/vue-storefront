
/* istanbul ignore file */

import { Ref } from '@vue/composition-api';
import { ProductSortInput, ProductAggregationInput } from '../types/GraphQL';
import { Product, Category } from '@jkawulok/prestashop-api';
export type ComputedProperty<T> = Readonly<Ref<Readonly<T>>>;
export type OrderSearchParams = {
  id?: string;
  page?: number;
  perPage?: number;
};

export interface CategorySearchParams {
  withProducts?: boolean;
  customQuery?: string;
  navigation?: boolean;
  search?: string;
  filter?: Record<string, any>;
  sort?: ProductSortInput;
  pageSize?: number;
  currentPage?: number;
  productSearch?: string;
  productFilter?: Record<string, any>;
  productPostFilter?: Record<string, any>;
  productAggregation?: ProductAggregationInput;
  productSort?: ProductSortInput;
  productPageSize?: number;
  productCurrentPage?: number;
}

export interface ProductsSearchParams {
  search?: string;
  term?: Record<string, any>;
  filter?: Record<string, any>;
  postFilter?: Record<string, any>;
  aggregation?: ProductAggregationInput;
  sort?: ProductSortInput;
  pageSize?: number;
  currentPage?: number;
  catId?: string | string[];
  skus?: string[];
  slug?: string;
  id?: string;
}

export interface FacetResultsData {
  products: Product[];
  categories: Category[];
  facets: Record<string, Filter>;
  total: number;
  perPageOptions: number[];
  itemsPerPage: number;
}

export interface Filter {
  options: FilterOption[];
  type: string;
}

export interface FilterOption {
  label: string;
  value: string | number | boolean | [number, number] | [string, string];
  selected: boolean;
}

export interface UseCategory
<
  CATEGORY
> {
  categories: ComputedProperty<CATEGORY[]>;
  search: (params: {
    [x: string]: any;
  }) => Promise<void>;
  loading: ComputedProperty<boolean>;
}
