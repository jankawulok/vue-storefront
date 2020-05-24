<template>
  <SbCallToAction v-bind="item" />
</template>

<script>
import { Blok } from '.'
import { SfCallToAction } from '@storefront-ui/vue'

export default {
  extends: Blok,
  name: 'BannerBlok',
  components: {
    SbCallToAction: SfCallToAction
  }
}
</script>
