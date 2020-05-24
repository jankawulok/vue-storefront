<template>
  <div class="w-100 h-100" style="min-width:100px;min-height:100px" :style="{ background: bgColor}" />
</template>

<script>
import { Blok } from '.'

export default {
  extends: Blok,
  name: 'PlaceholderBlok',
  computed: {
    bgColor () {
      return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
    }
  }
}
</script>
