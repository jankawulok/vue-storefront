import { ProductSortInput, SortEnum } from '../../types/GraphQL';

const mapSortBy = (sort: string): ProductSortInput => {
  const [option, direction] = sort.split('-');
  const sortOptions: ProductSortInput = {
    [option]: SortEnum[direction.charAt(0).toUpperCase() + direction.slice(1)]
  };
  return sortOptions;
};

export {
  mapSortBy
};
