/* istanbul ignore file */
/* eslint-disable camelcase */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};


export type AddItemsToCartInput = {
  cart_items: Array<CartItemInput>;
};

export type Address = {
  __typename?: 'Address';
  id?: Maybe<Scalars['Int']>;
  id_country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  id_state?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_mobile?: Maybe<Scalars['String']>;
  vat_number?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_iso?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  alias?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  postcode: Scalars['String'];
  country_code: Scalars['String'];
  phone: Scalars['String'];
  vat_number?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
};

export type Aggregation = {
  __typename?: 'Aggregation';
  count?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  attribute_code: Scalars['String'];
  type: Scalars['String'];
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  avg?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<AggregationOption>>>;
};

export type AggregationOption = {
  __typename?: 'AggregationOption';
  count?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  value: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  selected?: Maybe<Scalars['Boolean']>;
};

export type AggregationTypeInput = {
  type?: Maybe<AggTypeEnum>;
  label?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
};

export enum AggTypeEnum {
  Range = 'range',
  Terms = 'terms'
}

export type Attribute = {
  __typename?: 'Attribute';
  attribute_code?: Maybe<Scalars['String']>;
  entity_type?: Maybe<Scalars['String']>;
  attribute_type?: Maybe<Scalars['String']>;
  apply_to?: Maybe<Array<Maybe<Scalars['String']>>>;
  position?: Maybe<Scalars['Int']>;
  is_searchable?: Maybe<Scalars['Boolean']>;
  is_comparable?: Maybe<Scalars['Boolean']>;
  is_user_defined?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  is_filterable?: Maybe<Scalars['Boolean']>;
  is_filterable_in_search?: Maybe<Scalars['Boolean']>;
  frontend_input?: Maybe<Scalars['String']>;
  frontend_label?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<AttributeOption>>>;
};

export type AttributeCombination = {
  __typename?: 'AttributeCombination';
  id_attribute_group?: Maybe<Scalars['Int']>;
  is_color_group?: Maybe<Scalars['Int']>;
  public_group_name?: Maybe<Scalars['String']>;
  id_attribute?: Maybe<Scalars['Int']>;
  attribute_name?: Maybe<Scalars['String']>;
  attribute_color?: Maybe<Scalars['String']>;
  id_product_attribute?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_wt?: Maybe<Scalars['Float']>;
  special_price?: Maybe<Scalars['Float']>;
  special_price_wt?: Maybe<Scalars['Float']>;
  ecotax?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  default_on?: Maybe<Scalars['Int']>;
  reference?: Maybe<Scalars['String']>;
  minimal_quantity?: Maybe<Scalars['Int']>;
  available_date?: Maybe<Scalars['String']>;
  group_type?: Maybe<Scalars['String']>;
  id_image?: Maybe<Scalars['String']>;
};

export type AttributeInput = {
  attribute_code?: Maybe<FilterTypeInput>;
  entity_type?: Maybe<Scalars['String']>;
  attribute_id?: Maybe<FilterTypeInput>;
  is_user_defined?: Maybe<FilterTypeInput>;
};

export type AttributeOption = {
  __typename?: 'AttributeOption';
  value?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type BundleOption = {
  __typename?: 'BundleOption';
  option_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  product_links?: Maybe<Array<Maybe<BundleOptionLink>>>;
};

export type BundleOptionLink = {
  __typename?: 'BundleOptionLink';
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  can_change_quantity?: Maybe<Scalars['Boolean']>;
  option_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  position?: Maybe<Scalars['Int']>;
};

export type CarrierInput = {
  idCarrier: Scalars['Int'];
};

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['Int']>;
  id_customer?: Maybe<Scalars['String']>;
  id_guest?: Maybe<Scalars['String']>;
  nbProducts?: Maybe<Scalars['Int']>;
  items: Array<Maybe<CartItem>>;
  total?: Maybe<Scalars['Float']>;
  totalProducts?: Maybe<Scalars['Float']>;
  totalProductsTaxIncluded?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  cartRules: Array<Maybe<CartRule>>;
  deliveryAddressId?: Maybe<Scalars['Int']>;
  invoiceAddressId?: Maybe<Scalars['Int']>;
  paymentMethods: Array<Maybe<PaymentMethod>>;
  shippingMethods: Array<Maybe<ShippingMethod>>;
  selectedShippingMethod?: Maybe<ShippingMethod>;
  deliveryAddress?: Maybe<Address>;
  invoiceAddress?: Maybe<Address>;
  isAllProductsInStock?: Maybe<Scalars['Boolean']>;
};

export type CartAddressInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  country_code: Scalars['String'];
  phone: Scalars['String'];
  vat_number?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  unique_id?: Maybe<Scalars['String']>;
  id_product: Scalars['Int'];
  id_product_attribute: Scalars['Int'];
  cart_quantity: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  is_virtual?: Maybe<Scalars['Int']>;
  description_short?: Maybe<Scalars['String']>;
  available_now?: Maybe<Scalars['String']>;
  available_later?: Maybe<Scalars['String']>;
  id_category_default?: Maybe<Scalars['Int']>;
  id_manufacturer?: Maybe<Scalars['Int']>;
  on_sale?: Maybe<Scalars['Int']>;
  ecotax?: Maybe<Scalars['Int']>;
  additional_shipping_cost?: Maybe<Scalars['String']>;
  available_for_order?: Maybe<Scalars['Int']>;
  unity?: Maybe<Scalars['String']>;
  unit_price_ratio?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  price_wt?: Maybe<Scalars['Float']>;
  price_without_reduction?: Maybe<Scalars['Float']>;
  price_with_reduction?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_wt?: Maybe<Scalars['Float']>;
  reduction_applies?: Maybe<Scalars['String']>;
  quantity_discount_applies?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_available?: Maybe<Scalars['Int']>;
  link_rewrite?: Maybe<Scalars['String']>;
  id_image?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
};

export type CartItemInput = {
  id: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  id_product_attribute?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<CartItemOption>>>;
};

export type CartItemOption = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type CartRule = {
  __typename?: 'CartRule';
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Categories = EsResponseInterface & {
  __typename?: 'Categories';
  items?: Maybe<Array<Maybe<Category>>>;
  page_info?: Maybe<SearchResultPageInfo>;
  total_count?: Maybe<Scalars['Int']>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['ID']>;
  parent_id?: Maybe<Scalars['ID']>;
  parent?: Maybe<Category>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_root?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  path_in_store?: Maybe<Scalars['String']>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  product_count?: Maybe<Scalars['Int']>;
  default_sort_by?: Maybe<Scalars['String']>;
  children_data?: Maybe<Array<Maybe<Category>>>;
  children?: Maybe<Array<Maybe<Category>>>;
  children_count?: Maybe<Scalars['Int']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  include_in_menu?: Maybe<Scalars['Boolean']>;
  display_mode?: Maybe<Scalars['String']>;
  is_anchor?: Maybe<Scalars['Boolean']>;
  page_layout?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<CategoryBinding>>>;
  filters?: Maybe<Array<Maybe<Filter>>>;
  products?: Maybe<Products>;
};


export type CategoryProductsArgs = {
  filter?: Maybe<ProductFilterInput>;
  search?: Maybe<Scalars['String']>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductSortInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CategoryBinding = {
  __typename?: 'CategoryBinding';
  category_id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['ID']>;
};

export type CategoryBindingFilterInput = {
  category_id?: Maybe<FilterTypeInput>;
  name?: Maybe<FilterTypeInput>;
};

export type CategoryFilterInput = {
  id?: Maybe<FilterTypeInput>;
  parent_id?: Maybe<FilterTypeInput>;
  is_active?: Maybe<FilterTypeInput>;
  is_root?: Maybe<FilterTypeInput>;
  url_key?: Maybe<FilterTypeInput>;
  url_path?: Maybe<FilterTypeInput>;
  position?: Maybe<FilterTypeInput>;
  level?: Maybe<FilterTypeInput>;
  created_at?: Maybe<FilterTypeInput>;
  updated_at?: Maybe<FilterTypeInput>;
  product_count?: Maybe<FilterTypeInput>;
  children_data?: Maybe<CategoryFilterInput>;
  children_count?: Maybe<FilterTypeInput>;
  include_in_menu?: Maybe<FilterTypeInput>;
};

export type CategorySortInput = {
  id?: Maybe<SortEnum>;
  parent_id?: Maybe<SortEnum>;
  is_active?: Maybe<SortEnum>;
  url_key?: Maybe<SortEnum>;
  url_path?: Maybe<SortEnum>;
  position?: Maybe<SortEnum>;
  level?: Maybe<SortEnum>;
  created_at?: Maybe<SortEnum>;
  updated_at?: Maybe<SortEnum>;
  product_count?: Maybe<SortEnum>;
  include_in_menu?: Maybe<SortEnum>;
};

export type CmsBlock = {
  __typename?: 'CmsBlock';
  identifier?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  creation_time?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
};

export type CmsBlocks = EsResponseInterface & {
  __typename?: 'CmsBlocks';
  items?: Maybe<Array<Maybe<CmsBlock>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type CmsHierarchies = EsResponseInterface & {
  __typename?: 'CmsHierarchies';
  items?: Maybe<Array<Maybe<CmsHierarchy>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type CmsHierarchy = {
  __typename?: 'CmsHierarchy';
  node_id?: Maybe<Scalars['Int']>;
  parent_node_id?: Maybe<Scalars['Int']>;
  page_id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  request_url?: Maybe<Scalars['String']>;
  xpath?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
};

export type CmsInput = {
  id?: Maybe<FilterTypeInput>;
  identifier?: Maybe<FilterTypeInput>;
  store_id?: Maybe<FilterTypeInput>;
  url_path?: Maybe<FilterTypeInput>;
};

export type CmsPage = {
  __typename?: 'CmsPage';
  page_id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_heading?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
  url_path?: Maybe<Scalars['String']>;
};

export type CmsPages = EsResponseInterface & {
  __typename?: 'CmsPages';
  items?: Maybe<Array<Maybe<CmsPage>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type ConfigurableOption = {
  __typename?: 'ConfigurableOption';
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<ConfigurableOptionValue>>>;
};

export type ConfigurableOptionValue = {
  __typename?: 'ConfigurableOptionValue';
  name?: Maybe<Scalars['String']>;
  id_attribute?: Maybe<Scalars['String']>;
};

export type CustomAttributeMetadata = EsResponseInterface & {
  __typename?: 'CustomAttributeMetadata';
  items?: Maybe<Array<Maybe<Attribute>>>;
  total_count?: Maybe<Scalars['Int']>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type Customer = {
  __typename?: 'Customer';
  isAuthenticated?: Maybe<Scalars['Boolean']>;
  isGuest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  orders?: Maybe<OrderQueryResult>;
  addresses: Array<Maybe<Address>>;
};


export type CustomerOrdersArgs = {
  reference?: Maybe<Scalars['String']>;
};

export type CustomerInput = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  siret?: Maybe<Scalars['String']>;
  ape?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  newsletter?: Maybe<Scalars['Boolean']>;
  optin?: Maybe<Scalars['Boolean']>;
};

export type CustomerLoginResponse = {
  __typename?: 'CustomerLoginResponse';
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  cart?: Maybe<Cart>;
};

export type CustomerLogoutResponse = {
  __typename?: 'customerLogoutResponse';
  message?: Maybe<Scalars['String']>;
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  customer?: Maybe<Customer>;
  cart?: Maybe<Cart>;
};

export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  customer: Customer;
};

export type CustomOption = {
  __typename?: 'CustomOption';
  image_size_x?: Maybe<Scalars['Int']>;
  image_size_y?: Maybe<Scalars['Int']>;
  max_characters?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<CustomOptionValue>>>;
  option_id?: Maybe<Scalars['ID']>;
  is_require?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CustomOptionValue = {
  __typename?: 'CustomOptionValue';
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<Scalars['String']>;
  option_type_id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};


export type DeliveryAddressInput = {
  idAddress?: Maybe<Scalars['Int']>;
  address?: Maybe<CartAddressInput>;
};

export type EntityUrl = {
  __typename?: 'EntityUrl';
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type EsResponse = EsResponseInterface & {
  __typename?: 'ESResponse';
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type EsResponseInterface = {
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type ExampleModuleResponse1 = {
  __typename?: 'exampleModuleResponse1';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type Feature = {
  __typename?: 'Feature';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Filter = {
  __typename?: 'Filter';
  type?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type FilterTypeInput = {
  eq?: Maybe<Scalars['JSON']>;
  finset?: Maybe<Array<Maybe<Scalars['String']>>>;
  from?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  gteq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  like?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  lteq?: Maybe<Scalars['String']>;
  moreq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['JSON']>;
  notnull?: Maybe<Scalars['String']>;
  null?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  scope?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type InvoiceAddressInput = {
  idAddress?: Maybe<Scalars['Int']>;
  address?: Maybe<CartAddressInput>;
};


export type Manufacturer = {
  __typename?: 'Manufacturer';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  products?: Maybe<Products>;
};

export type ManufacturerAggregationInput = {
  field?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ManufacturerFilterInput = {
  id?: Maybe<FilterTypeInput>;
  name?: Maybe<FilterTypeInput>;
  description?: Maybe<FilterTypeInput>;
  short_description?: Maybe<FilterTypeInput>;
  image?: Maybe<FilterTypeInput>;
  created_at?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type Manufacturers = EsResponseInterface & {
  __typename?: 'Manufacturers';
  items?: Maybe<Array<Maybe<Manufacturer>>>;
  page_info?: Maybe<SearchResultPageInfo>;
  total_count?: Maybe<TotalCountInfo>;
  aggregations?: Maybe<Scalars['JSON']>;
  attribute_metadata?: Maybe<Array<Maybe<Attribute>>>;
  sort_fields?: Maybe<SortFields>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
};

export type ManufacturerSortInput = {
  best_match?: Maybe<SortEnum>;
  score?: Maybe<SortEnum>;
  name?: Maybe<SortEnum>;
  created_at?: Maybe<SortEnum>;
  updated_at?: Maybe<SortEnum>;
};

export type MediaGalleryItem = {
  __typename?: 'MediaGalleryItem';
  image?: Maybe<Scalars['String']>;
  pos?: Maybe<Scalars['Int']>;
  typ?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  lab?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['JSON']>;
  video?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  hello?: Maybe<Scalars['String']>;
  addItemsToCart: Cart;
  removeItemFromCart: Cart;
  clearCart: Cart;
  applyCoupon: Cart;
  removeCoupon: Cart;
  setCarrier: Cart;
  setDeliveryAddress: Cart;
  setInvoiceAddress: Cart;
  placeOrder?: Maybe<PlaceOrderOutput>;
  removeUnavailableItems?: Maybe<RemoveUnavailableItemsResponse>;
  customerLogin?: Maybe<CustomerLoginResponse>;
  customerRegister?: Maybe<CustomerOutput>;
  customerLogout?: Maybe<CustomerLogoutResponse>;
  customerChangePassword?: Maybe<Scalars['Boolean']>;
  customerDeleteAddress?: Maybe<Scalars['Boolean']>;
  customerCreateAddress?: Maybe<Address>;
  customerUpdateAddress?: Maybe<Address>;
};


export type MutationHelloArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationAddItemsToCartArgs = {
  input?: Maybe<AddItemsToCartInput>;
};


export type MutationRemoveItemFromCartArgs = {
  input?: Maybe<RemoveItemFromCartInput>;
};


export type MutationApplyCouponArgs = {
  coupon?: Maybe<Scalars['String']>;
};


export type MutationSetCarrierArgs = {
  input?: Maybe<CarrierInput>;
};


export type MutationSetDeliveryAddressArgs = {
  input?: Maybe<DeliveryAddressInput>;
};


export type MutationSetInvoiceAddressArgs = {
  input?: Maybe<InvoiceAddressInput>;
};


export type MutationPlaceOrderArgs = {
  input?: Maybe<PlaceOrderInput>;
};


export type MutationCustomerLoginArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationCustomerRegisterArgs = {
  input: CustomerInput;
};


export type MutationCustomerChangePasswordArgs = {
  currentPassword?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
};


export type MutationCustomerDeleteAddressArgs = {
  id: Scalars['Int'];
};


export type MutationCustomerCreateAddressArgs = {
  input?: Maybe<AddressInput>;
};


export type MutationCustomerUpdateAddressArgs = {
  id: Scalars['Int'];
  input?: Maybe<AddressInput>;
};

export type Order = {
  __typename?: 'Order';
  id_order?: Maybe<Scalars['Int']>;
  reference?: Maybe<Scalars['String']>;
  payment?: Maybe<Scalars['String']>;
  id_carrier?: Maybe<Scalars['Int']>;
  id_currency?: Maybe<Scalars['Int']>;
  id_cart?: Maybe<Scalars['Int']>;
  current_state?: Maybe<Scalars['String']>;
  total_discounts?: Maybe<Scalars['Float']>;
  total_discounts_tax_inc?: Maybe<Scalars['Float']>;
  total_discounts_tax_excl?: Maybe<Scalars['Float']>;
  total_paid?: Maybe<Scalars['Float']>;
  total_paid_tax_inc?: Maybe<Scalars['Float']>;
  total_paid_tax_excl?: Maybe<Scalars['Float']>;
  total_paid_real?: Maybe<Scalars['Float']>;
  total_products?: Maybe<Scalars['Float']>;
  total_products_wt?: Maybe<Scalars['Float']>;
  total_shipping?: Maybe<Scalars['Float']>;
  total_shipping_tax_incl?: Maybe<Scalars['Float']>;
  products: Array<OrderedProduct>;
  deliveryAddress?: Maybe<Address>;
  invoiceAddress?: Maybe<Address>;
};

export type OrderedProduct = {
  __typename?: 'OrderedProduct';
  product_id?: Maybe<Scalars['Int']>;
  product_attribute_id?: Maybe<Scalars['Int']>;
  product_name?: Maybe<Scalars['String']>;
  product_quantity?: Maybe<Scalars['Int']>;
  product_quantity_in_stock?: Maybe<Scalars['Int']>;
  product_quantity_refunded?: Maybe<Scalars['Int']>;
  product_quantity_return?: Maybe<Scalars['Int']>;
  product_quantity_reinjected?: Maybe<Scalars['Int']>;
  product_price?: Maybe<Scalars['Float']>;
  product_ean13?: Maybe<Scalars['String']>;
  product_reference?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['Float']>;
};

export type OrderQueryResult = {
  __typename?: 'OrderQueryResult';
  total: Scalars['Int'];
  result: Array<Maybe<Order>>;
};

export type OrderState = {
  __typename?: 'OrderState';
  id?: Maybe<Scalars['String']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PlaceOrderInput = {
  paymentMethod: Scalars['String'];
};

export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  order: Order;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['Int']>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<CategoryBinding>>>;
  type_id?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  ean13?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  price_incl_tax?: Maybe<Scalars['Float']>;
  price_tax?: Maybe<Scalars['Float']>;
  final_price?: Maybe<Scalars['Float']>;
  final_price_incl_tax?: Maybe<Scalars['Float']>;
  final_price_tax?: Maybe<Scalars['Float']>;
  original_price?: Maybe<Scalars['Float']>;
  original_price_incl_tax?: Maybe<Scalars['Float']>;
  original_price_tax?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  special_price?: Maybe<Scalars['Float']>;
  special_price_incl_tax?: Maybe<Scalars['Float']>;
  special_price_tax?: Maybe<Scalars['Float']>;
  special_from_date?: Maybe<Scalars['String']>;
  special_to_date?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  manufacturer?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  small_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrice>>>;
  news_from_date?: Maybe<Scalars['String']>;
  news_to_date?: Maybe<Scalars['String']>;
  required_options?: Maybe<Scalars['Boolean']>;
  has_options?: Maybe<Scalars['Boolean']>;
  image_label?: Maybe<Scalars['String']>;
  small_image_label?: Maybe<Scalars['String']>;
  thumbnail_label?: Maybe<Scalars['String']>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_options?: Maybe<Array<Maybe<Scalars['String']>>>;
  color?: Maybe<Scalars['String']>;
  kolor?: Maybe<Array<Maybe<Scalars['String']>>>;
  color_options?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Array<Maybe<CategoryBinding>>>;
  configurable_children?: Maybe<Array<Maybe<Product>>>;
  stock?: Maybe<StockItem>;
  minimal_quantity?: Maybe<Scalars['Int']>;
  quantity_increment?: Maybe<Scalars['Int']>;
  features?: Maybe<Array<Maybe<Feature>>>;
  in_stock?: Maybe<Scalars['Boolean']>;
  keyword?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryItem>>>;
  configurable_options?: Maybe<Array<Maybe<ConfigurableOption>>>;
  attributes_combinations?: Maybe<Array<Maybe<AttributeCombination>>>;
  custom_options?: Maybe<Array<Maybe<CustomOption>>>;
  bundle_options?: Maybe<Array<Maybe<BundleOption>>>;
  aggs?: Maybe<Scalars['JSON']>;
  accesories?: Maybe<Products>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Reviews>;
};


export type ProductReviewsArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ReviewFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductAggregationInput = {
  price?: Maybe<AggregationTypeInput>;
  manufacturer?: Maybe<AggregationTypeInput>;
  kolor?: Maybe<AggregationTypeInput>;
  kolekcja?: Maybe<AggregationTypeInput>;
};

export type ProductFilterInput = {
  id?: Maybe<FilterTypeInput>;
  url_key?: Maybe<FilterTypeInput>;
  name?: Maybe<FilterTypeInput>;
  sku?: Maybe<FilterTypeInput>;
  description?: Maybe<FilterTypeInput>;
  short_description?: Maybe<FilterTypeInput>;
  price?: Maybe<FilterTypeInput>;
  special_price?: Maybe<FilterTypeInput>;
  special_from_date?: Maybe<FilterTypeInput>;
  special_to_date?: Maybe<FilterTypeInput>;
  weight?: Maybe<FilterTypeInput>;
  category?: Maybe<CategoryBindingFilterInput>;
  category_with_parents?: Maybe<FilterTypeInput>;
  manufacturer?: Maybe<FilterTypeInput>;
  meta_title?: Maybe<FilterTypeInput>;
  meta_keyword?: Maybe<FilterTypeInput>;
  meta_description?: Maybe<FilterTypeInput>;
  image?: Maybe<FilterTypeInput>;
  small_image?: Maybe<FilterTypeInput>;
  thumbnail?: Maybe<FilterTypeInput>;
  tier_price?: Maybe<FilterTypeInput>;
  news_from_date?: Maybe<FilterTypeInput>;
  news_to_date?: Maybe<FilterTypeInput>;
  custom_layout_update?: Maybe<FilterTypeInput>;
  min_price?: Maybe<FilterTypeInput>;
  max_price?: Maybe<FilterTypeInput>;
  category_ids?: Maybe<FilterTypeInput>;
  options_container?: Maybe<FilterTypeInput>;
  required_options?: Maybe<FilterTypeInput>;
  has_options?: Maybe<FilterTypeInput>;
  image_label?: Maybe<FilterTypeInput>;
  small_image_label?: Maybe<FilterTypeInput>;
  thumbnail_label?: Maybe<FilterTypeInput>;
  created_at?: Maybe<FilterTypeInput>;
  updated_at?: Maybe<FilterTypeInput>;
  country_of_manufacture?: Maybe<FilterTypeInput>;
  custom_layout?: Maybe<FilterTypeInput>;
  gift_message_available?: Maybe<FilterTypeInput>;
  visibility?: Maybe<FilterTypeInput>;
  type_id?: Maybe<FilterTypeInput>;
  in_stock?: Maybe<FilterTypeInput>;
  stock?: Maybe<StockFilterInput>;
  status?: Maybe<FilterTypeInput>;
  size?: Maybe<FilterTypeInput>;
  size_options?: Maybe<FilterTypeInput>;
  kolor?: Maybe<FilterTypeInput>;
  seria?: Maybe<FilterTypeInput>;
  wiek?: Maybe<FilterTypeInput>;
  color_options?: Maybe<FilterTypeInput>;
  categories_without_path?: Maybe<FilterTypeInput>;
  or?: Maybe<ProductFilterInput>;
};

export type Products = EsResponseInterface & {
  __typename?: 'Products';
  items?: Maybe<Array<Maybe<Product>>>;
  page_info?: Maybe<SearchResultPageInfo>;
  total_count?: Maybe<TotalCountInfo>;
  aggregations?: Maybe<Scalars['JSON']>;
  available_filters?: Maybe<Array<Maybe<Aggregation>>>;
  attribute_metadata?: Maybe<Array<Maybe<Attribute>>>;
  sort_fields?: Maybe<SortFields>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
};

export type ProductSortInput = {
  best_match?: Maybe<SortEnum>;
  score?: Maybe<SortEnum>;
  name?: Maybe<SortEnum>;
  sku?: Maybe<SortEnum>;
  description?: Maybe<SortEnum>;
  short_description?: Maybe<SortEnum>;
  price?: Maybe<SortEnum>;
  final_price?: Maybe<SortEnum>;
  special_price?: Maybe<SortEnum>;
  special_from_date?: Maybe<SortEnum>;
  special_to_date?: Maybe<SortEnum>;
  weight?: Maybe<SortEnum>;
  manufacturer?: Maybe<SortEnum>;
  meta_title?: Maybe<SortEnum>;
  meta_keyword?: Maybe<SortEnum>;
  meta_description?: Maybe<SortEnum>;
  image?: Maybe<SortEnum>;
  small_image?: Maybe<SortEnum>;
  thumbnail?: Maybe<SortEnum>;
  tier_price?: Maybe<SortEnum>;
  news_from_date?: Maybe<SortEnum>;
  news_to_date?: Maybe<SortEnum>;
  custom_layout_update?: Maybe<SortEnum>;
  options_container?: Maybe<SortEnum>;
  required_options?: Maybe<SortEnum>;
  has_options?: Maybe<SortEnum>;
  image_label?: Maybe<SortEnum>;
  small_image_label?: Maybe<SortEnum>;
  thumbnail_label?: Maybe<SortEnum>;
  created_at?: Maybe<SortEnum>;
  updated_at?: Maybe<SortEnum>;
  country_of_manufacture?: Maybe<SortEnum>;
  custom_layout?: Maybe<SortEnum>;
  gift_message_available?: Maybe<SortEnum>;
};

export type ProductTierPrice = {
  __typename?: 'ProductTierPrice';
  customer_group_id?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  percentage_value?: Maybe<Scalars['Float']>;
  website_id?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  version?: Maybe<Scalars['String']>;
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  attribute?: Maybe<Attribute>;
  categories?: Maybe<Categories>;
  category?: Maybe<Category>;
  cmsPages?: Maybe<CmsPages>;
  cmsBlocks?: Maybe<CmsBlocks>;
  cmsHierarchies?: Maybe<CmsHierarchies>;
  manufacturers?: Maybe<Manufacturers>;
  manufacturer?: Maybe<Manufacturer>;
  products?: Maybe<Products>;
  product?: Maybe<Product>;
  reviews?: Maybe<Reviews>;
  taxrule?: Maybe<TaxRules>;
  urlResolver?: Maybe<EntityUrl>;
  sayHello?: Maybe<Scalars['String']>;
  testElastic?: Maybe<Product>;
  hello?: Maybe<Scalars['String']>;
  exampleModule1?: Maybe<ExampleModuleResponse1>;
  cart: Cart;
  customer?: Maybe<Customer>;
};


export type QueryCustomAttributeMetadataArgs = {
  attributes?: Maybe<AttributeInput>;
  filter?: Maybe<AttributeInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAttributeArgs = {
  attribute_code?: Maybe<Scalars['String']>;
  attribute_id?: Maybe<Scalars['String']>;
};


export type QueryCategoriesArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<CategoryFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<CategorySortInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>;
  url_path?: Maybe<Scalars['String']>;
  root?: Maybe<Scalars['Boolean']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCmsPagesArgs = {
  filter?: Maybe<CmsInput>;
};


export type QueryCmsBlocksArgs = {
  filter?: Maybe<CmsInput>;
};


export type QueryCmsHierarchiesArgs = {
  filter?: Maybe<CmsInput>;
};


export type QueryManufacturersArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ManufacturerFilterInput>;
  aggregation?: Maybe<Array<Maybe<ManufacturerAggregationInput>>>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ManufacturerSortInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryManufacturerArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryProductsArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductFilterInput>;
  postFilter?: Maybe<ProductFilterInput>;
  aggregation?: Maybe<ProductAggregationInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductSortInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  sku?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url_path?: Maybe<Scalars['String']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryReviewsArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ReviewFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTaxruleArgs = {
  filter?: Maybe<TaxRuleInput>;
};


export type QueryUrlResolverArgs = {
  url: Scalars['String'];
};


export type QuerySayHelloArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryTestElasticArgs = {
  sku?: Maybe<Scalars['String']>;
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>;
};

export type RemoveItemFromCartInput = {
  idProduct: Scalars['Int'];
  idProductAttribute: Scalars['Int'];
  idCustomization?: Maybe<Scalars['Int']>;
};

export type RemoveUnavailableItemsResponse = {
  __typename?: 'RemoveUnavailableItemsResponse';
  cart: Cart;
  messages: Array<Maybe<Scalars['String']>>;
};

export type Review = {
  __typename?: 'Review';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  review_entity?: Maybe<Scalars['String']>;
  review_type?: Maybe<Scalars['Int']>;
  review_status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
};

export type ReviewFilterInput = {
  review_status?: Maybe<FilterTypeInput>;
  product_id?: Maybe<FilterTypeInput>;
};

export type Reviews = EsResponseInterface & {
  __typename?: 'Reviews';
  page_info?: Maybe<SearchResultPageInfo>;
  total_count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Review>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  page_size?: Maybe<Scalars['Int']>;
  current_page?: Maybe<Scalars['Int']>;
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  totalPriceWithTax?: Maybe<Scalars['Float']>;
  totalPriceWithoutTax?: Maybe<Scalars['Float']>;
};

export enum SortEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SortField = {
  __typename?: 'SortField';
  value?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SortFields = {
  __typename?: 'SortFields';
  default?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<SortField>>>;
};

export type StockFilterInput = {
  is_in_stock?: Maybe<FilterTypeInput>;
  qty?: Maybe<FilterTypeInput>;
};

export type StockItem = {
  __typename?: 'StockItem';
  item_id?: Maybe<Scalars['ID']>;
  product_id?: Maybe<Scalars['ID']>;
  stock_id?: Maybe<Scalars['ID']>;
  qty?: Maybe<Scalars['Float']>;
  is_in_stock?: Maybe<Scalars['Boolean']>;
  is_qty_decimal?: Maybe<Scalars['Boolean']>;
  min_qty?: Maybe<Scalars['Float']>;
  max_sale_qty?: Maybe<Scalars['Float']>;
  backorders?: Maybe<Scalars['Int']>;
  qty_increments?: Maybe<Scalars['Float']>;
};

export type TaxRate = {
  __typename?: 'TaxRate';
  tax_region_id?: Maybe<Scalars['Int']>;
  tax_country_id?: Maybe<Scalars['Int']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  tax_postcode?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type TaxRule = {
  __typename?: 'TaxRule';
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  rates?: Maybe<Array<Maybe<TaxRate>>>;
  customer_tax_class_ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  product_tax_class_ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tax_rate_ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type TaxRuleInput = {
  id?: Maybe<FilterTypeInput>;
  code?: Maybe<FilterTypeInput>;
  customer_tax_class_ids?: Maybe<FilterTypeInput>;
  product_tax_class_ids?: Maybe<FilterTypeInput>;
  tax_rate_ids?: Maybe<FilterTypeInput>;
};

export type TaxRules = EsResponseInterface & {
  __typename?: 'TaxRules';
  total_count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<TaxRule>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type TotalCountInfo = {
  __typename?: 'TotalCountInfo';
  value?: Maybe<Scalars['Int']>;
  relation?: Maybe<Scalars['String']>;
};

export enum UrlRewriteEntityTypeEnum {
  Category = 'CATEGORY',
  Product = 'PRODUCT'
}
