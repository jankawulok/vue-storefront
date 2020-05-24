<template>
  <div>
    <rich-text-renderer v-if="doc" :document="doc" />
  </div>
</template>
<script>
import { createElement } from '@vue/composition-api'

export default createElement({
  setup (props) {
    const doc = ref(props.content)
    return {
      doc
    }
  }
})
</script>