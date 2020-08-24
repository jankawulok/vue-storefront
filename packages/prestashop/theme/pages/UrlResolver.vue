<template>
  <div :key="$route.fullPath">
    <SfLoader :loading="loading">
      <component :is="component" />
    </SfLoader>
  </div>
</template>
<script>
import { useUrlResolver } from '@jkawulok/prestashop-composables';
import { computed, getCurrentInstance } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';
import { SfLoader } from '@storefront-ui/vue';

const pagesMap = {
  PRODUCT: 'Product',
  CATEGORY: 'Category'
};

export function getComponentBy(resourceType) {
  if (!resourceType || !pagesMap[resourceType]) return;
  let componentName = pagesMap[resourceType];
  if (!componentName) componentName = '404';
  return () => import(`./${componentName}`);
}

export default {
  name: 'DynamicRoute',
  components: {
    SfLoader
  },
  setup() {
    const { route, redirect, error } = getCurrentInstance().$nuxt.context;
    const { search, loading, entity } = useUrlResolver('url-resolver');
    const component = computed(() => getComponentBy(entity.value ? entity.value.type : null));
    onSSR(async () => {
      await search(route.path.replace(/^\//, ''));
      if (!entity.value) {
        error({ statusCode: 404, path: '/', message: 'page not found!' });
      }

    });

    return { loading, component, redirect, route, entity };
  }
};
</script>
<style lang="scss" scoped>
@import '~@storefront-ui/vue/styles.scss';
</style>
