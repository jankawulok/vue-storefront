<template>
  <SfHeading v-bind="item" :class="item.modifiers.join(' ')" />
</template>

<script>
import { Blok } from '.'
import { SfHeading } from '@storefront-ui/vue'

export default {
  extends: Blok,
  name: 'Heading',
  components: {
    SfHeading
  }
}
</script>
