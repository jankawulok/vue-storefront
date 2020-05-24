<template>
  <SfBannerGrid :banner-grid="parseInt(item.bannerGrid)">
    <template v-slot:banner-A>
      <Render v-for="child in item.bannerA" :item="child" :key="child.uuid" />
    </template>
    <template v-slot:banner-B>
      <Render v-for="child in item.bannerB" :item="child" :key="child.uuid" />
    </template>
    <template v-slot:banner-C>
      <Render v-for="child in item.bannerC" :item="child" :key="child.uuid" />
    </template>
    <template v-slot:banner-D>
      <Render v-for="child in item.bannerD" :item="child" :key="child.uuid" />
    </template>
  </SfBannerGrid>
</template>

<script>
import { Blok } from '.'
import Render from './Render.vue'
import { SfBannerGrid } from '@storefront-ui/vue'

export default {
  extends: Blok,
  name: 'BannerGrid',
  components: {
    SfBannerGrid,
    Render
  }
}
</script>
