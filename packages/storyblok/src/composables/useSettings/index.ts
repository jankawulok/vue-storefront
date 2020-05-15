import { ref, Ref, computed } from '@vue/composition-api';
import { useSSR } from '@vue-storefront/core';
import { StoryParams, StoryData } from 'storyblok-js-client';
import { client } from '../../index';

export const settings: Ref<StoryData | null> = ref(null);
export const loading: Ref<boolean> = ref<boolean>(false);
let isInitialized = false;

interface Settings {
  slug: string;
  params: StoryParams;
}
interface UseSettings {
  loading: Ref<boolean>;
  settings: Ref<StoryData>;
  loadSettings: () => Promise<void>;
}

export default function useSettings(): UseSettings {
  const { initialState, saveToInitialState } = useSSR('sb-setting');
  settings.value = isInitialized ? settings.value : initialState || null;
  isInitialized = true;
  const loadSettings = async () => {
    if (!initialState) {
      loading.value = true;
    }

    const { data } = await client.getStory('settings');

    settings.value = data.story;
    saveToInitialState(settings.value);
    loading.value = false;
  };

  return {
    loading: computed(() => loading.value),
    settings: computed(() => settings.value),
    loadSettings
  };
}
