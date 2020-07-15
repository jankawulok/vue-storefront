import { getSettings } from '@jkawulok/prestashop-api';

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
