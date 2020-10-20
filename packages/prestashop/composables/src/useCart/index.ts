/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase, camelcase */
import { UseCart, useCartFactory, UseCartFactoryParams } from '@vue-storefront/core';
import { getCart, addToCart as apiAddToCart, removeFromCart as apiRemoveFromCart, applyCoupon as apiApplyCoupon, removeCoupon as apiRemoveCoupon} from '@jkawulok/prestashop-api';
import { Product, Cart, CartItem, AddItemsToCartInput, RemoveItemFromCartInput } from './../types/GraphQL';

const getBasketItemByProduct = ({ currentCart, product }) => {
  return currentCart ? currentCart.items.find(item => item.id_product === product.id) : false;
};

const params: UseCartFactoryParams<Cart, CartItem, Product, any> = {
  loadCart: async () => {
    const cartResponse = await getCart();
    console.log('loadCart', cartResponse);
    return cartResponse.data.cart;
  },
  addToCart: async ({ product, quantity }) => {
    const updatedCart = await apiAddToCart({
      cart_items: [
        {
          id: product.id.toString(),
          quantity: quantity
        }
      ]
    } as AddItemsToCartInput);
    console.log('addToCart', updatedCart);
    return updatedCart.data.cartUpdate;
  },
  removeFromCart: async ({ product }) => {
    const updateResponse = await apiRemoveFromCart({
      idProduct: product.id_product,
      idProductAttribute: product.id_product_attribute
    } as RemoveItemFromCartInput);
    return updateResponse.data.cartUpdate;
  },
  updateQuantity: async ({ currentCart, product, quantity }) => {
    // const updatedCart = await apiUpdateCartQuantity(product, quantity);
    // return updatedCart.data.cart;
    return currentCart;
  },
  clearCart: async ({ currentCart }) => {
    console.log('Mocked clearCart', currentCart);
    return currentCart;
  },
  applyCoupon: async ({ currentCart, couponCode }) => {
    const updatedCart = await apiApplyCoupon(couponCode);
    return {
      updatedCart: updatedCart.data.cartUpdate,
      updatedCoupon: couponCode
    };
  },
  removeCoupon: async () => {
    const updatedCart = await apiRemoveCoupon();
    return { updatedCart: updatedCart.data.cartUpdate };
  },
  isOnCart: ({ currentCart, product }) => {
    return Boolean(getBasketItemByProduct({ currentCart, product }));
  }
};

const { useCart, setCart } = useCartFactory<Cart, CartItem, Product, any>(params);

export { useCart, setCart };
