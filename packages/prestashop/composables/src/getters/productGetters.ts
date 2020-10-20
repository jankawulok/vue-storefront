/* eslint-disable camelcase */
/* istanbul ignore file */
/* eslint-disable */


import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters,
  AgnosticBreadcrumb
} from '@vue-storefront/core';
import { createFormatPrice, createFormatDate } from './_utils';
import { Product, MediaGalleryItem, ProductVariant } from './../types/GraphQL';
import { getSettings } from '@jkawulok/prestashop-api';

interface ProductVariantFilters {
  idProductAttribute?: number;
  master?: boolean;
  attributes?: Record<string, string>;
}

export const getProductName = (product: Product): string => product ? (product as any).name : '';

export const getProductSlug = (product: Product): string => product ? (product as any).url_key : '';

export const getProductPrice = (product: Product): AgnosticPrice => {
  const price = product ? product?.original_price_incl_tax : null;
  const special = product ? product?.special_price_incl_tax : null;
  return {
    regular: price,
    special: (special !== 0) && (special !== price) ? special : null
  };
};

export const getProductStock = (product: ProductVariant): number => product.stock?.qty ? product.stock.qty : 0;

export const getProductRating = (product: ProductVariant): number => product && (product as any).rating && ((product as any).rating !== 0) ? (product as any).rating : null;

export const getProductProperties = (product: ProductVariant): any => product?.features ? product.features : [];

export const getProductBreadcrumbs = (product: ProductVariant): AgnosticBreadcrumb[] =>
  (product ? product.breadcrumbs : [])
    .map((item) => ({
      text: item.name,
      link: item.slug
    }));

export const getProductGallery = (
  product: ProductVariant
): AgnosticMediaGalleryItem[] =>
  (product ? product.media_gallery : []).map((image: MediaGalleryItem) => ({
    small: getSettings().api.imgUri + '/300/300/resize' + image.image,
    big: getSettings().api.imgUri + '/1000/1000/resize' + image.image,
    normal: getSettings().api.imgUri + '/800/800/resize' + image.image
  }));

export const getProductCoverImage = (product: Product): string =>
  product ? getSettings().api?.imgUri + '/300/300/resize' + (product as any).image : '';

// const getDefaultVariant = (products: ProductVariant[] | Readonly<ProductVariant> | Product[] | Readonly<Product>)

         
export const getProductFiltered = (products: Product[], filters: ProductVariantFilters): ProductVariant[] => {
  if (!products) {
    return [];
  }
  // if (filters.idProductAttribute) {
  //   const attribute = products[0].attributes_combinations?.find((variant) => variant.id_product_attribute === filters.idProductAttribute);
  //   return [{...products[0], ...attribute} as ProductVariant];
  // }
  return products.map((product) => {
    return { ...product, ...product.attributes_combinations?.find((variant) => variant.default_on === 1) } as ProductVariant;
  });
};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getProductAttributes = (products: ProductVariant[] | ProductVariant, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
  return {};
};

export const getProductDescription = (product: ProductVariant): any => product?.description ? product.description : '';

export const getProductCategoryIds = (product: ProductVariant): string[] => product?.category_ids;

export const getProductId = (product: ProductVariant): string =>
  product.id?.toString();

export const getFormattedPrice = (price: number) => createFormatPrice(price);

export const getProductMinSaleQty = (product: ProductVariant): number => product?.minimal_quantity ? product.minimal_quantity : 1;

export const getTotalReviews = (product: ProductVariant): number =>
  product?.reviews?.total_count || 0;

export const getAverageRating = (product: ProductVariant): number =>
  (product as any)?.averageRating || 0;

export const getProductReviews = (product: ProductVariant) =>
  (product?.reviews?.items ? product.reviews.items : [])
    .map((item) => ({
      author: item.nickname,
      date: createFormatDate(item.created_at),
      message: item.detail,
      rating: 4
    }));

const productGetters: ProductGetters<ProductVariant, ProductVariantFilters> = {
  getName: getProductName,
  getSlug: getProductSlug,
  getPrice: getProductPrice,
  getGallery: getProductGallery,
  getCoverImage: getProductCoverImage,
  getFiltered: getProductFiltered,
  getAttributes: getProductAttributes,
  getDescription: getProductDescription,
  getCategoryIds: getProductCategoryIds,
  getReviews: getProductReviews,
  getBreadcrumbs: getProductBreadcrumbs,
  getProperties: getProductProperties,
  getStock: getProductStock,
  getRating: getProductRating,
  getId: getProductId,
  getMinSaleQty: getProductMinSaleQty,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating
};

export default productGetters;
