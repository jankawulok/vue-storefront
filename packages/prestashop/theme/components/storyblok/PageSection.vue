<template>
  <section class="h-100 page-section" :class="classes" :style="{ backgroundImage: `url(${item.background_image})` }">
    <div class="page-section__header" :class="container">
      <h2 v-editable="item.header" v-if="item.show_header" class="banner h1 mt30 pt0"> {{ item.header }} </h2>
    </div>
    <div class="page-section__content" :class="container">
      <sb-render v-for="child in item.content" :item="child" :key="child.uuid" />
    </div>
  </section>
</template>

<style lang="scss" scoped>

section {
  width: 100%;
  background-size: cover;
}
</style>

<script>
import { Blok } from '.'
import Render from './Render.vue'
export default {
  name: 'PageSection',
  extends: Blok,
  components: {
    sbRender: Render
  },
  computed: {
    container () {
      return this.item.style.find(f => f === 'w-100') ? 'w-100' : 'container'
    },
    classes () {
      return this.item.style.join(' ')
    }
  }
}
</script>
<style lang="scss">
.page-section {
  &__content {
    background-color: white;
    padding: 1rem;
  }
  &__header {
    padding: 1rem;
  }
}
</style>
