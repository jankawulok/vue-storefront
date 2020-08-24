import { useCategoryFactory } from '@vue-storefront/core';
import { UseCategory } from '../types';
import { params } from './factoryParams';
import { Category } from './../types/GraphQL';

const useCategory: (id: string) => UseCategory<Category> = useCategoryFactory<Category, any>(params);

export default useCategory;
