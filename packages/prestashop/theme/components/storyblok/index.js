export const components = {
  callToAction: () => import('./CallToAction.vue'),
  // carousel: () => import('./Carousel.vue'),
  container: () => import('./Container.vue'),
  // divider: () => import('./Divider.vue'),
  headline: () => import('./Headline.vue'),
  debug: () => import('./Debug.vue'),
  hero: () => import('./Hero.vue'),
  html: () => import('./Html.vue'),
  image: () => import('./Image.vue'),
  page: () => import('./Page.vue'),
  pageSection: () => import('./PageSection.vue'),
  placeholder: () => import('./Placeholder.vue'),
  ProductsCarousel: () => import('./ProductsCarousel.vue'),
  section: () => import('./Section.vue'),
  tabs: () => import('./Tabs.vue'),
  tile: () => import('./Tile.vue'),
  Banner: () => import('./Banner.vue'),
  BannerGrid: () => import('./BannerGrid.vue'),
  Heading: () => import('./Heading.vue')
}

export function add(key, component, options) {
  if (components[key] && !options.force) {
    console.log(`Component with key ${key} already exists, skipping...`)
    return
  }
  components[key] = component
}

export { default as Blok } from './Blok'
