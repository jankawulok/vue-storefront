import { useStory, useSettings } from './composables';
import StoryblokClient from 'storyblok-js-client';
import { StoryblokConfig } from 'storyblok-js-client';

let client: StoryblokClient = null;

const setup = (setupConfig: StoryblokConfig) => {
  client = new StoryblokClient(setupConfig);
  return { client };
};

export {
  setup,
  client,
  useStory,
  useSettings
};
