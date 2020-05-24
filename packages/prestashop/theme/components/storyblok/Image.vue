<template>
  <router-link v-if="typeof item.link.cached_url !== 'undefined' && item.link.cached_url !== ''" :to="item.link.cached_url">
    <img :src="item.image.image" :alt="item.image.alt_tag" class="sb-image">
  </router-link>
  <img v-else :src="item.image.image" :alt="item.image.alt_tag" class="sb-image">
</template>

<script>
import { Blok } from '.'

export default {
  extends: Blok,
  name: 'ImageBlok'
}
</script>
<style lang="scss" scoped>
.sb-image {
  max-width: 100%;
  height: auto;
}
</style>
