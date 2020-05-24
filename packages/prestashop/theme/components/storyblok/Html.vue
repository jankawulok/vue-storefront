<template>
  <div class="sb-html-blok" v-if="item.content" v-html="item.content.html" />
</template>

<script>
import { Blok } from '.'

export default {
  extends: Blok,
  name: 'HtmlBlok'
}
</script>
<style lang="scss">
.sb-html-blok {
  img {
    max-width: 100%;
    height: auto;
  }
}

</style>
