<template>
  <SfHeader
    active-sidebar="activeSidebar"
    @click:cart="toggleCartSidebar"
    @click:account="onAccountClicked"
    @enter:search="onEnterSearch"
    :cartItemsQty="cartTotalItems"
    :searchValue="$route.query.search"
    >
    <template #logo>
      <nuxt-link to="/" class="sf-header__logo">
        <SfImage src="/icons/logo.svg" alt="Vue Storefront Next" class="sf-header__logo-image"/>
      </nuxt-link>
    </template>
    <template #navigation>
      <SfHeaderNavigationItem>
        <nuxt-link :to="{ name: 'category', params: { slug: 'kuchnia'}, path: '/kuchnia'}">
          KUCHNIA
        </nuxt-link>
      </SfHeaderNavigationItem>
      <SfHeaderNavigationItem>
        <nuxt-link to="/tuloko-bezpieczny-stolik-podroznika-czerwony1">
          MEN
        </nuxt-link>
      </SfHeaderNavigationItem>
      <SfHeaderNavigationItem>
        <nuxt-link :to="{ name: 'category', params: { slug: 'glowna'}, path: '/glowna'}">
          ALL
        </nuxt-link>
      </SfHeaderNavigationItem>
    </template>
    <template #search>
      <SfSearchBar
      placeholder="szukaj..."
    />
    </template>
  </SfHeader>
</template>

<script>
import { SfHeader, SfImage, SfSearchBar, SfMegaMenu, SfMenuItem, SfList } from '@storefront-ui/vue';
import uiState from '~/assets/ui-state';
import { useCart, useUser, cartGetters } from '@jkawulok/prestashop-composables';
import { getSearchHistory } from '@jkawulok/prestashop-api';

import { computed } from '@vue/composition-api';
const { toggleCartSidebar, toggleLoginModal } = uiState;

export default {
  components: {
    SfHeader,
    SfImage,
    SfSearchBar,
    SfMegaMenu,
    SfMenuItem,
    SfList
  },
  setup(props, { root }) {
    const { isAuthenticated } = useUser();
    const onAccountClicked = () => {
      console.log(getSearchHistory());
      // isAuthenticated && isAuthenticated.value ? root.$router.push('/my-account') : toggleLoginModal();
    };
    const { cart } = useCart();
    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      // TODO: remove once resolved by UI team: https://github.com/DivanteLtd/storefront-ui/issues/922
      return count ? count.toString() : null;
    });
    const sq = async () => await getSearchHistory();
    const onEnterSearch = (search) => {
      root.$router.push({path: "/c/glowna", query: { search }});
    }
    return {
      cartTotalItems,
      toggleLoginModal,
      onAccountClicked,
      toggleCartSidebar,
      uiState,
      onEnterSearch,
      sq
    };
  },
  data() {
    return {
      visible: true,
      subcategories: [
        {
          header: 'Clothing',
          items: [
            { label: 'Skirts' },
            { label: 'Sweaters' },
            { label: 'Dresses' },
            { label: 'TShirts' },
            { label: 'Pants' },
            { label: 'Underwear' },
            { label: 'Jackets' },
            { label: 'Blouses' }
          ]
        },
        {
          header: 'Accessories',
          items: [
            { label: 'Bags & Purses' },
            { label: 'Belts' },
            { label: 'Gloves' },
            { label: 'Hats' }
          ]
        },
        {
          header: 'Shoes',
          items: [
            { label: 'Boots' },
            { label: 'Heels' },
            { label: 'Flat shoes' },
            { label: 'Loafers' },
            { label: 'Sandals' },
            { label: 'Slippers' },
            { label: 'Trainers' }
          ]
        }
      ],
      asideTitle: 'Featured',
      title: 'Man'
    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header__logo-image {
  height: 100%;
}
</style>
