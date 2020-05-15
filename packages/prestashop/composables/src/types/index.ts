
export type OrderSearchParams = {
  id?: string;
  page?: number;
  perPage?: number;
};

export interface ProductsSearchParams {
  perPage?: number;
  page?: number;
  sort?: any;
  term?: any;
  search?: string;
  filters?: Record<string, any>;
  catId?: string | string[];
  skus?: string[];
  slug?: string;
  id?: string;
}
