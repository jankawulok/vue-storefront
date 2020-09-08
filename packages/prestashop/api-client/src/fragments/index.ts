export const ProductTileFragment = `
  fragment ProductTileFragment on Product {
    id
    url_key
    sku
    description
    price
    price_incl_tax
    original_price_incl_tax
    special_price_incl_tax
    name
    manufacturer
    meta_title
    meta_keyword
    image
    media_gallery {
      image
      label
    }
    stock {
      is_in_stock
      qty
      max_sale_qty
    }
    rating
    attributes_combinations {
      id_attribute_group
      id_attribute
      id_product_attribute
      price
      price_wt
      special_price
      special_price_wt
    }
  }
`;

export const ProductFragment = `
  fragment ProductFragment on Product {
    id
    url_key
    sku
    description
    breadcrumbs {
      category_id
      name
      slug
    }
    short_description
    price
    price_incl_tax
    original_price_incl_tax
    special_price_incl_tax
    name
    manufacturer
    meta_title
    meta_keyword
    meta_description
    image
    minimal_quantity
    quantity_increment
    media_gallery {
      image
      label
    }
    stock {
      is_in_stock
      qty
      backorders
      max_sale_qty
    }
    rating
    features {
      name
      value
    }
    configurable_options {
      name
      values {
        name
        id_attribute
      }
    }
    attributes_combinations {
      id_attribute_group
      id_attribute
      id_product_attribute
      price
      price_wt
      special_price
      special_price_wt
    }
    accesories {
      items {
        id
        name
        image
        url_key
      }
    }
    reviews {
      items {
        nickname
        created_at
        detail
      }
    }
  }
`;

export const CartFragment = `
  fragment DefaultCart on Cart {
    total
    totalProducts
    totalProductsTaxIncluded
    shippingCost
    nbProducts
    items {
      unique_id
      id_product
      id_product_attribute
      cart_quantity
      name
      is_virtual
      description_short
      available_now
      available_later
      id_category_default
      id_manufacturer
      on_sale
      ecotax
      additional_shipping_cost
      available_for_order
      unity
      unit_price_ratio
      price
      price_wt
      price_without_reduction
      price_with_reduction
      total
      total_wt
      reduction_applies
      quantity_discount_applies
      quantity
      quantity_available
      link_rewrite
      cover
    }
  }
`;

export const CustomerFragment = `
  fragment DefaultCustomer on Customer {
    email
    firstname
    lastname
    isAuthenticated
  }
`;
