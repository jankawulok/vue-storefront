<template>
  <div class="flex-grid">
    <template v-for="child in item.content">
      <div class="flex-grid__item" :key="child.uuid">
        <sb-render :item="child"/>
      </div>
    </template>
  </div>
</template>

<script>
import { Blok } from '.'
import Render from './Render.vue'
export default {
  extends: Blok,
  name: 'FlexGridBlok',
  components: {
    sbRender: Render
  }
}
</script>
