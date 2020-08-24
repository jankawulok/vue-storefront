<template>
<div>
  <SfHeader
    data-cy="app-header"
    active-sidebar="activeSidebar"
    @click:cart="toggleCartSidebar"
    @click:wishlist="toggleWishlistSidebar"
    :cartItemsQty="cartTotalItems"
    :accountIcon="false"
    class="sf-header--has-mobile-search"
    @change:search="onSearchQueryChanged"
    :search-value="searchQuery"
  >
    <!-- TODO: add mobile view buttons after SFUI team PR -->
    <template #logo>
      <nuxt-link data-cy="app-header-url_logo" :to="localePath('/')" class="sf-header__logo">
        <SfImage src="/icons/logo.svg" alt="Vue Storefront Next" class="sf-header__logo-image"/>
      </nuxt-link>
    </template>
    <template #navigation>
      <SfHeaderNavigationItem
        :class="{'sf-header-navigation-item--is-active': isOpen}"
        @mouseover="isOpen = true"
        @mouseleave="isOpen = false"
      >
        <nuxt-link :to="localePath('/nowa')">
          Kategorie
        </nuxt-link>
      </SfHeaderNavigationItem>
      <SfHeaderNavigationItem>
        <nuxt-link :to="localePath('/okazje')">
          Strefa&nbsp;okazji
        </nuxt-link>
      </SfHeaderNavigationItem>
      <SfHeaderNavigationItem>
        <nuxt-link :to="localePath('/blog')">
          Blog
        </nuxt-link>
      </SfHeaderNavigationItem>
      <search-results :visible="showSearchResults" :categories="categoriesFound" :products="productsFound"/>
    </template>
    <template #aside>
      <LocaleSelector class="mobile-only"/>
    </template>
  </SfHeader>
  <Menu class="mobile-menu bg-white"/>
</div>
</template>

<script>
import { 
  SfHeader,
  SfImage,
  SfMegaMenu,
  SfList,
  SfBanner,
  SfMenuItem } from '@storefront-ui/vue';
import uiState from '~/assets/ui-state';
import { useCart, useWishlist, cartGetters, useCategory, categoryGetters } from '@jkawulok/prestashop-composables';
import { computed, ref } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';
import LocaleSelector from './LocaleSelector';
import SearchResults from './SearchResults';
import Menu from './Menu';
import { getCategoryPath } from '~/helpers/category';

const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal } = uiState;

export default {
  components: {
    SfHeader,
    SfImage,
    SearchResults,
    LocaleSelector,
    SfMegaMenu,
    SfList,
    SfBanner,
    SfMenuItem,
    Menu
  },
  data() {
    return {
      isOpen: false,
      categories: [
        {
          title: "Clothing",
          subcategories: [
            { title: "Skirts" },
            { title: "Sweaters" },
            { title: "Dresses" },
            { title: "TShirts" },
            { title: "Pants" },
            { title: "Underwear" },
            { title: "Jackets" },
            { title: "Blouses" },
          ],
        },
        {
          title: "Accesories",
          subcategories: [
            { title: "Bags & Purses" },
            { title: "Belts" },
            { title: "Gloves" },
            { title: "Hats" },
          ],
        },
        {
          title: "Shoes",
          subcategories: [
            { title: "Boots" },
            { title: "Heels" },
            { title: "Flat shoes" },
            { title: "Loafers" },
            { title: "Sandals" },
            { title: "Slippers" },
            { title: "Trainers" },
          ],
        },
      ],
      banners: [
        {
          title: "THE OFFICE LIFE",
          subtitle: "T-shirts",
          pictures: {
            mobile: "/assets/storybook/SfMegaMenu/bannerSandals.jpg",
            desktop: "/assets/storybook/SfMegaMenu/bannerSandals.jpg",
          },
        },
        {
          title: "ECO SANDALS",
          subtitle: "T-shirts",
          pictures: {
            mobile: "/assets/storybook/SfMegaMenu/bannerBeachBag.jpg",
            desktop: "/assets/storybook/SfMegaMenu/bannerBeachBag.jpg",
          },
        },
      ],
    };
  },
  setup() {
    const { cart, loadCart } = useCart();
    const { loadWishlist } = useWishlist();
    // const { search, searchResults } = useSearch();
    const searchResults = ref(null);
    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      return count ? count.toString() : null;
    });
    const searchQuery = ref('');
    const showSearchResults = ref(false);
    const categoriesFound = computed(() => {
      return searchResults.value?.categories;
    });
    const productsFound = computed(() => searchResults.value?.products);
    const suggestionsFound = computed(() => searchResults.value?.suggestions);

    const { categories, search } = useCategory('navigation');
    const categoryQuery = {
      navigation: true
    }
    const navigation = computed(() => categories.value? categories.value[0].children  : [] );
    const onSearchQueryChanged = value => {
      searchQuery.value = value;
      if (value.length > 2) {
        showSearchResults.value = true;
        // search({ term: searchQuery.value });
      } else {
        showSearchResults.value = false;
      }
    };

    onSSR(async () => {
      await search(categoryQuery);
      await loadCart();
      await loadWishlist();
    });

    return {
      cartTotalItems,
      categoriesFound,
      productsFound,
      suggestionsFound,
      searchQuery,
      searchResults,
      showSearchResults,
      toggleCartSidebar,
      toggleLoginModal,
      toggleWishlistSidebar,
      onSearchQueryChanged,
      categoryGetters,
      navigation,
      getCategoryPath
    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header__logo-image {
  height: 100%;
}
</style>
