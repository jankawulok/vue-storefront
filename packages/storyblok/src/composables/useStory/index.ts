import { ref, Ref } from '@vue/composition-api';
import { useSSR } from '@vue-storefront/core';
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
  const { initialState, saveToInitialState } = useSSR(cacheId);
  const loading = ref(false);
  const error = ref(null);
  const story: Ref<StoryData> = ref(initialState || {});

  const search = async (query: SearchParams) => {
    if (!initialState) {
      loading.value = true;
    }

    const { data } = await client.getStory(query.slug, query.params);

    story.value = data.story;
    saveToInitialState(story.value);
    loading.value = false;
  };

  return {
    loading,
    error,
    story,
    search
  };
}
