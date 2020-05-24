<template>
  <div class="carousel">
    <div class="carousel__controls">
      <!--@slot slot for icon moving to the previous item -->
      <slot name="prev" v-bind="{ go: () => go(-1) }">
        <SfArrow
          aria-label="previous"
          class="sf-arrow--long"
          @click="go(-1)"
        />
      </slot>
      <!--@slot slot for icon moving to the next item -->
      <slot name="next" v-bind="{ go: () => go(+1) }">
        <SfArrow
          aria-label="next"
          class="sf-arrow--long sf-arrow--right"
          @click="go(+1)"
        />
      </slot>
    </div>
    <div class="carousel__wrapper">
      <div>
        <ul class="carousel__slides">
          <!--@slot default slot for SfCarouselItem tags -->
          <slot />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import CarouselItem from "./_internal/CarouselItem.vue";
import { SfArrow } from "@storefront-ui/vue";
Vue.component("CarouselItem", CarouselItem);

export default {
  name: "Carousel",
  components: {
    SfArrow,
    CarouselItem
  },
  props: {
    /** Carousel options like glide.js (https://glidejs.com/docs/) */
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      glide: null,
      defaultSettings: {}
    };
  },
  computed: {
    mergedOptions() {
      return {
        ...this.defaultSettings,
        ...this.settings
      };
    },
  },
  mounted: function () {

  },
  methods: {
    go(delta) {
      const carousel = this.$el.querySelector(".carousel__slides");
      const width = carousel.offsetWidth;
      carousel.scrollTo(carousel.scrollLeft + width * delta, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.carousel {
  position: relative;
  &__wrapper {
    max-width: var(
      --carousel-width,
      calc(100% - var(--carousel-controls-size))
    );
    padding: var(--carousel-padding);
    margin: auto;
    overflow: hidden;
  }
  &__slides {
    margin: 0;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    list-style-type: none;
    list-style-position: outside;
    list-style-image: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none
  }
  &__slides::-webkit-scrollbar {
    display: none
  }
  &__controls {
    position: var(--carousel-controls-position, absolute);
    top: var(--carousel-controls-top, 50%);
    left: var(--carousel-controls-left, 0);
    transform: var(--carousel-controls-transform, translate3d(0, -50%, 0));
    display: var(--carousel-controls-display, none);
    justify-content: var(--carousel-controls-justify-content, space-between);
    width: var(--carousel-controls-width, 100%);
  }
  @include for-desktop {
    --carousel-controls-size: 15rem;
    --carousel-controls-display: flex;
  }
}
</style>
