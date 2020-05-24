<template>
  <div :class="classes" class="sb-section">
    <sb-render v-for="child in item.content" :item="child" :key="child.uuid" />
  </div>
</template>

<script>
import { Blok } from '.'
import Render from './Render.vue'

export default {
  extends: Blok,
  name: 'SectionBlok',
  computed: {
    classes () {
      let classes = this.item.style.join(' ')
      return classes
    }
  },
  components: {
    sbRender: Render
  }
}
</script>
<style lang="scss">
.sb-section {
  background: white;
}
</style>
