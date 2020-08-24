import { Ref, computed } from '@vue/composition-api';
import { vsfRef } from '@vue-storefront/core';
import { StoryParams, StoryData } from 'storyblok-js-client';
import { client } from '../../index';

export const settings: Ref<StoryData | null> = vsfRef(null);
export const loading: Ref<boolean> = vsfRef<boolean>(false);
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
  settings.value = isInitialized ? settings.value : initialState || null;
  isInitialized = true;
  const loadSettings = async () => {
    loading.value = true;
    const { data } = await client.getStory('settings');

    settings.value = data.story;
    loading.value = false;
  };

  return {
    loading: computed(() => loading.value),
    settings: computed(() => settings.value),
    loadSettings
  };
}
