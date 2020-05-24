<template>
  <SfBanner v-bind="item" :class="modifiers" />
</template>

<script>
import { Blok } from '.'
import { SfBanner } from '@storefront-ui/vue'

export default {
  extends: Blok,
  name: 'Banner',
  components: {
    SfBanner
  },
  computed: {
    modifiers: function () { return this.item.modifiers ? this.item.modifiers.join(' ') : ''}
  }
}
</script>
