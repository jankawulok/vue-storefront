<template>
  <PostTile v-bind="item" />
</template>

<script>
import { Blok } from '.'
import PostTile from 'theme/components/core/PostTile'

export default {
  extends: Blok,
  name: 'PostTileBlok',
  components: {
      PostTile
  }
}
</script>
<style lang="scss">
.sb-heading {
  margin-bottom: 1rem;
}

</style>
