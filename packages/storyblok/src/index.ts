import useContent from './composables/useContent';
import RenderContent from './components/renderContent';
import { apiClientFactory } from '@vue-storefront/core';
import StoryblokClient, { StoryblokConfig } from 'storyblok-js-client';

let client: StoryblokClient = null;

const { setup, update, getSettings } = apiClientFactory<StoryblokConfig, StoryblokConfig>({
  defaultSettings: {
    accessToken: 'xf5dRMMjltLzKOcNgMaU9Att',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
  },
  onSetup: (config: StoryblokConfig) => {
    client = new StoryblokClient(config);
  }
});

const settings = getSettings();

export { client, setup, update, getSettings, settings, useContent, RenderContent };
