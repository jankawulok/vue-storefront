import { UseCategoryFactoryParams } from '@vue-storefront/core';
import { getCategory} from '@jkawulok/prestashop-api';
import { Category } from './../types/GraphQL';

export const params: UseCategoryFactoryParams<Category, any> = {
  categorySearch: async (params) => {
    const categoryResponse = await getCategory(params);
    if (categoryResponse.data?.category) {
      return [categoryResponse.data.category];
    }
    if (categoryResponse.data.categories?.items) {
      return categoryResponse.data.categories.items;
    }
  }
};
