<template>
  <div class="tile" :class="classes">
    <template v-for="_item in item.content">
      <template v-if="_item.component !== 'tile'" >
        <div class="tile is-child" :key="_item.uuid">
          <sb-render :item="_item" />
        </div>
      </template>
      <template v-else>
        <TileBlok v-editable="item" :ancestor="false" :item="_item" :key="_item.uuid" />
      </template>
    </template>
  </div>
</template>

<style lang="sass">
$tile-spacing: 0.75rem !default

.tile
  align-items: stretch
  display: block
  flex-basis: 0
  flex-grow: 1
  flex-shrink: 1
  min-height: min-content
  // Modifiers
  &.is-ancestor
    margin-left: $tile-spacing * -1
    margin-right: $tile-spacing * -1
    margin-top: $tile-spacing * -1
    &:last-child
      margin-bottom: $tile-spacing * -1
    &:not(:last-child)
      margin-bottom: $tile-spacing
  &.is-child
    margin: 0 !important
  &.is-parent
    padding: $tile-spacing
  &.is-vertical
    flex-direction: column
    & > .tile.is-child:not(:last-child)
      margin-bottom: 1.5rem !important
  @media screen and (min-width: 800px)
    &:not(.is-child)
      display: flex
    @for $i from 1 through 12
      &.is-#{$i}
        flex: none
        width: ($i / 12) * 100%
</style>

<script>
import SbRender from './Render'
import Blok from './Blok'
export default {
  name: 'TileBlok',
  components: {
    SbRender
  },
  extends: Blok,
  props: {
    ancestor: {
      type: null,
      default: true
    },
    parent: {
      type: null,
      default: true
    }
  },
  computed: {
    isVertical () {
      return this.item.is_vertical
    },
    isParent () {
      // return this.item.content.find(c => c.component === 'tile')
      return !this.ancestor
    },
    isChild () {
      return !this.isParent && !this.ancestor
    },
    classes () {
      let classes = []
      classes.push(this.ancestor ? 'is-ancestor' : null)
      classes.push(this.parent ? 'is-parent' : null)
      classes.push(this.isChild ? 'is-child' : null)
      classes.push(this.isVertical ? 'is-vertical' : '')
      return classes.join(' ')
    }
  }
}
</script>
