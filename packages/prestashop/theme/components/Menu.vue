<template>
  <div class="sf-mega-menu">
    <SfSidebar
      :visible="isCategoryMenuOpen"
      :button="false"
      @close="toggleCategoryMenu"
      class="sidebar sf-sidebar--right"
    >
      <SfMegaMenu
        title="Menu"
        :visible="true"
      >
        <SfMegaMenuColumn
          v-for="category in navigation"
          :key="category.url_key"
          :title="category.name"
        >
          <SfList>
            <SfListItem
              v-for="item in category.children"
              :key="item.url_key"
            >
            <template v-if="item.children.length > 0">
              <SfMegaMenuColumn
                v-for="subcat in item"
                :key="subcat.url_key"
                :title="subcat.name"
              >
                <SfList>
                  <SfListItem
                    v-for="subsubcat in subcat.children"
                    :key="subsubcat.url_key"
                  >
                  </SfListItem>
                </SfList>
              </SfMegaMenuColumn>
            </template>
            <template v-else>
              <router-link
                :to="localePath(getCategoryPath(item.url_key))"
              >
                <SfMenuItem :label="item.name" />
              </router-link>
            </template>
            </SfListItem>
          </SfList>
        </SfMegaMenuColumn>
      </SfMegaMenu>
    </SfSidebar>
  </div>
</template>
<script>
import { useCategory, categoryGetters } from '@jkawulok/prestashop-composables';
import { SfList, SfMenuItem, SfMegaMenu, SfSidebar } from '@storefront-ui/vue';
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
    SfSidebar,
    SfMegaMenu 
  },
  setup() {
    const { categories, search } = useCategory('navigation');
    const categoryQuery = {
      navigation: true
    }
    const navigation = computed(() => categories.value && categories.value[0] ? categories.value[0].children  : [] );
    onSSR(async () => {
      await search(categoryQuery);
    });
    return {
      navigation,
      getCategoryPath,
      isCategoryMenuOpen
    }
  }
  
}
</script>