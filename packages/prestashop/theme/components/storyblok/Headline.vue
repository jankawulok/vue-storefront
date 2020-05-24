<template>
  <component :is="item.type">
    <strong v-if="item.strong">{{ item.text }}</strong>
    <template v-else>{{ item.text }}</template>
  </component>
</template>

<script>
import { Blok } from '.'

export default {
  extends: Blok,
  name: 'HeadlineBlok'
}
</script>
<style lang="scss">
.sb-heading {
  margin-bottom: 1rem;
}

</style>
