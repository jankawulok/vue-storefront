<template>
  <SfLoader :loading="loading">
    <Carousel class="product-carousel">
      <CarouselItem v-for="(product, i) in products" :key="i">
        <SfProductCard
              :key="productGetters.getSlug(product)"
              :style="{ '--index': i }"
              :imageHeight="300"
              :imageWidth="300"
              :title="productGetters.getName(product)"
              :image="productGetters.getCoverImage(product)"
              :regular-price="productGetters.getFormattedPrice(productGetters.getPrice(product).regular)"
              :special-price="productGetters.getFormattedPrice(productGetters.getPrice(product).special)"
              :max-rating="5"
              :score-rating="productGetters.getRating(product)"
              :isOnWishlist="false"
              :link="localePath(getProductPath(productGetters.getSlug(product)))"
              class="product-card"
            />
      </CarouselItem>
    </Carousel>
  </SfLoader>
</template>

<script>
import { computed, watch } from '@vue/composition-api';
import { Blok } from '.'
import {
  SfProductCard,
  SfLoader
} from '@storefront-ui/vue';
import Carousel from "~/components/organisms/Carousel/Carousel"
import { useProduct, productGetters, categoryGetters } from '@jkawulok/prestashop-composables';
import { getProductPath } from '~/helpers/product';

export default {
  extends: Blok,
  setup( props ) {
    const { products, search, loading } = useProduct(props.item._uid);
    const getFiltersFromQuery = (filterQuery) => {
      const filters = {};
      if (typeof(filterQuery.children) !== "undefined") {
        filterQuery.children.forEach(child => {
          if(child.query.value) {
            if(child.query.rule === 'name') {
              filters['id'] = {
                [child.query.operator]: child.query.value.map((v) => v.id.toString())
              }
            } else {
              filters[child.query.rule] = {
                [child.query.operator]: child.query.value.map((v) => v.id.toString())
              }
            }
            
          }
        })
      }
      return filters
    }
    const filters = computed(() => getFiltersFromQuery(props.item.products.query));
    search({
      perPage: 20,
      term: filters.value
    });
    watch([filters], () => {
      console.log(filters.value);
      search({
        perPage: 20,
        term: filters.value
      })
    })
    return {
      products,
      loading,
      productGetters,
      getProductPath,
    }
  },
  methods: {
    
  },
  components: {
    Carousel,
    SfProductCard,
    SfLoader
  }
}
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.product-carousel {
  margin: 0 calc(var(--spacer-xl) * -1) 0 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0;
    --carousel-padding: var(--spacer-xl);
    --carousel-max-width: calc(100% - 13.5rem);
  }
}
.product-card {
  max-width: 100%;
  width: 100%;
}
</style>