<template>
  <li class="carousel-item">
    <slot />
  </li>
</template>
<script>
export default {
  name: "CarouselItem",
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.carousel-item {
  max-width: var(--carousel-item-width, 25%);
  flex-basis: var(--carousel-item-flex-basis, 25%);
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
  @include for-desktop {
    --carousel-item-width: 25%;
    --carousel-item-flex-basis: 25%;
  }
  @include for-mobile {
    --carousel-item-width: 50%;
    --carousel-item-flex-basis: 50%;
  }
  
}

</style>