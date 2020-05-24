<template>
  <div :class="item.background" class="sb-page">
    <sb-render v-for="child in item.body" :item="child" :key="child.uuid" />
  </div>
</template>

<script>
import { Blok } from '.'
import Render from './Render.vue'

export default {
  extends: Blok,
  name: 'PageBlok',
  components: {
    sbRender: Render
  }
}
</script>
<style lang="scss">
@import "~@storefront-ui/vue/styles";
.sb-page {
  &.primary {
    background-color: --c-primary;
  }
  &.secondary {
    background-color: --c-secondaryy;
  }
}
</style>
