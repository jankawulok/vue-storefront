<template>
  <div id="blogpost">
    <SfLoader :loading="loading">
      <div v-if="story.content">
        <div class="header">
          <h1>{{story.content.title}}</h1>
        </div>
        <div class="blogpost__content">
          <rich-text-renderer v-if="story.content.content" :document="story.content.content" />
        </div>
      </div>
    </SfLoader>
  </div>
</template>
<script>
import { SfBreadcrumbs, SfLoader } from '@storefront-ui/vue';

import { computed, ref, createComponent } from '@vue/composition-api';
import { useStories, useSettings } from '@jkawulok/storyblok';
import { onSSR } from '@vue-storefront/core';
export default {
  name: 'BlogPost',
  components: {
    SfBreadcrumbs,
    SfLoader
  },
  setup(props, context) {
    const { path } = context.root.$route;
    const { loading, error, story, search } = useStories('blogpost');
    search({slug: path});
    // onSSR(async () => {
    //   await search({slug: path});
    // });
    return { loading, story };
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  }
};
</script>
<style lang='scss'>
@import "~@storefront-ui/vue/styles";
.breadcrumbs {
  padding: var(--spacer-xl) var(--spacer-2xl) var(--spacer-2xl)
    var(--spacer-2xl);
}
.blogpost {
  &__content {
    margin: var(--spacer-xl) 0;
    font-family: var(--font-family-secondary);
    font-size: var(--font-base);
    color: var(--c-dark-variant);
    line-height: 1.6;
    @include for-desktop {
      font-size: var(--font-base);
    }
    p {
      max-width: 60rem;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }
}
</style>
