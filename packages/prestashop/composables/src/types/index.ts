
/* istanbul ignore file */

import { Ref } from '@vue/composition-api';
import { ProductSortInput, ProductAggregationInput } from '../types/GraphQL'
export type ComputedProperty<T> = Readonly<Ref<Readonly<T>>>;
export type OrderSearchParams = {
  id?: string;
  page?: number;
  perPage?: number;
};

export interface ProductsSearchParams {
  search?: string;
  term?: Record<string, any>;
  filter?: Record<string, any>;
  postFilter?: Record<string, any>;
  aggregation?: ProductAggregationInput,
  sort?: ProductSortInput;
  pageSize?: number;
  currentPage?: number;
  catId?: string | string[];
  skus?: string[];
  slug?: string;
  id?: string;
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