import { ref, Ref } from '@vue/composition-api';
import { vsfRef } from '@vue-storefront/core';
import { StoryParams, StoryData } from 'storyblok-js-client';
import { client } from '../../index';

type Search = (query: SearchParams) => Promise<void>;

interface SearchParams {
  slug: string;
  params: StoryParams;
}
interface UseStory {
  loading: Ref<boolean>;
  error: Ref<boolean>;
  story: Ref<StoryData>;
  search: Search;
}

export default function useStory(cacheId?: string): UseStory {
  const loading = vsfRef(false);
  const error = vsfRef(null);
  const story: Ref<StoryData> = vsfRef({});

  const search = async (query: SearchParams) => {
    loading.value = true;

    const { data } = await client.getStory(query.slug, query.params);

    story.value = data.story;
    loading.value = false;
  };

  return {
    loading,
    error,
    story,
    search
  };
}
