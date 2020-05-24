<template>
  <SfTabs>
    <SfTab v-for="tab in item.content" :item="tab" :key="tab.uuid" v-bind="tab">
      <sb-render v-for="child in tab.content" :item="child" :key="child.uuid" />
    </SfTab>
  </SfTabs>
</template>

<script>
import { Blok } from '.'
import Render from './Render.vue'
import { SfTabs } from '@storefront-ui/vue'
import SfTab from "@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue";
// import 'buefy/dist/buefy.css'

export default {
  extends: Blok,
  name: 'BannerBlok',
  components: {
    SfTabs,
    SfTab,
    sbRender: Render
  }
}
</script>
