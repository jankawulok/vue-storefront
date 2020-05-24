<template>
  <SfHero>
      <SfHeroItem v-for="child in item.content" :item="child" :key="child.uuid" v-bind="child" />
  </SfHero>
</template>

<script>
import { Blok } from '.'
import { SfHero } from "@storefront-ui/vue"


export default {
  extends: Blok,
  name: 'BannerBlok',
  components: {
    SfHero
  }
}
</script>
