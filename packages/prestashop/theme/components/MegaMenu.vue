
<template>
  <div class="ps-mega-menu">
    <SfList>
      <div
        v-for="category in navigation"
        :key="category.name"
        class=""
      >
        <nuxt-link
          class=""
          :to="localePath(getCategoryPath(category.url_key))"
        >
          <SfMenuItem :label="category.name" />
        </nuxt-link>
      </div>
    </SfList>
  </div>
</template>

<script>
import { useCategory, categoryGetters } from '@jkawulok/prestashop-composables';
import { SfList, SfMenuItem, SfMegaMenu } from '@storefront-ui/vue';
import { NavigationItem } from '~/components/atoms/NavigationItem'
import { computed, ref } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';
import uiState from '~/assets/ui-state';
import { getCategoryPath } from '~/helpers/category';
const { isCategoryMenuOpen, toggleCategoryMenu } = uiState;

export default {
  components: {
    SfList,
    SfMenuItem,
    SfMegaMenu 
  },
  setup() {
    const { categories, search } = useCategory('navigation');
    const categoryQuery = {
      navigation: true
    }
    const navigation = computed(() => categories.value? categories.value[0].children  : [] );
    onSSR(async () => {
      await search(categoryQuery);
    });
    return {
      navigation,
      getCategoryPath
    }
  }
  
}
</script>

<style lang="scss">
@import '~@storefront-ui/vue/styles.scss';
@import "~@storefront-ui/shared/styles/helpers";
@import "~@storefront-ui/shared/styles/variables";


.ps-mega-menu-navigation-item {
  flex: 1;
  display: flex;
  & > *:not(.ps-mega-menu) {
    --vertical-menu-item-padding: var(--spacer-sm);
    --link-color: var(--vertical-menu-item-color, var(--c-dark-variant));
    box-sizing: border-box;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--vertical-menu-item-padding, calc(var(--spacer-sm) - 1px) var(--spacer-sm));
    margin: var(--vertical-menu-item-margin, 0);
    @include border(--vertical-menu-item-border, 0 0 2px 0, solid, transparent);
    transition: var(--vertical-menu-item-transition, border-color 150ms ease-in-out, color 150ms ease-in-out);
    color: var(--vertical-menu-item-color, var(--c-dark-variant));
    @include font(
      --vertical-menu-item-font,
      var(--font-bold),
      var(--font-sm),
      1.2,
      var(--font-family-secondary)
    );
    text-transform: uppercase;
    text-decoration: initial;
    // text-align: left;
    @include for-desktop {
      padding: var(--vertical-menu-item-padding, calc(var(--spacer-sm) - 1px) var(--spacer-sm));
      margin: var(--vertical-menu-item-margin, 0);
    }
    &:focus {
      --vertical-menu-item-color: var(--c-text);
      --vertical-menu-item-border-color: var(--c-primary);
    }
  }
  &:hover > *:not(.sf-mega-menu){
    --vertical-menu-item-color: var(--c-text);
    --vertical-menu-item-border-color: var(--c-primary);
    &:active{
      --vertical-menu-item-color: var(--c-primary);
    }
  }
  &--is-active:hover > *:not(.sf-mega-menu){
    --vertical-menu-item-color: var(--c-primary);
  }
}
</style>