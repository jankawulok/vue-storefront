import { getSettings } from '@jkawulok/prestashop-api';
import { Product } from '../types/GraphQL';

export const createFormatPrice = (price: number) => {
  if (!price) {
    return null;
  }
  const currency = getSettings().currency;
  return new Intl.NumberFormat(`${getSettings().locale}-${getSettings().country}`, { style: 'currency', currency }).format(price);
};

export const createFormatDate = (date: string) => {
  if (!date) {
    return null;
  }
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat(`${getSettings().locale}-${getSettings().country}`, options).format(new Date(date));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getVariantByAttributes = (products: Product[] | Readonly<Product[]>, attributes: any): Product => {
  if (!products || products.length === 0) {
    return null;
  }

};
