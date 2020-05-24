<template>
  <div class="container">
    <sb-render v-for="child in item.body" :item="child" :key="child.uuid" />
  </div>
</template>

<script>
import { Blok } from '.'
import Render from './Render.vue'
export default {
  extends: Blok,
  name: 'ContainerBlok',
  components: {
    sbRender: Render
  }
}
</script>
