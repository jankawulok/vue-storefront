import webpack from 'webpack';
import localeConfig from './lang/config';

export default {
  mode: 'spa',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.unshift({
        name: 'urlresolver',
        path: '/:slug',
        component: resolve('pages/UrlResolver.vue')
      });
    }
  },
  // css: ['@/assets/scss/main.scss'],
  loading: { color: '#fff' },
  buildModules: [
    // to core
    '@nuxt/typescript-build',
    // '@nuxtjs/pwa',
    ['@vue-storefront/nuxt', {
      coreDevelopment: true,
      useRawSource: {
        dev: [
          '@jkawulok/prestashop-composables',
          '@jkawulok/storyblok',
          '@vue-storefront/core'
        ],
        prod: [
          '@jkawulok/prestashop-composables',
          '@jkawulok/storyblok',
          '@vue-storefront/core'
        ]
      }
    }],
    // @core-development-only-start
    ['@vue-storefront/nuxt-theme', {
      generate: {
        replace: {
          apiClient: '@jkawulok/prestashop-api',
          composables: '@jkawulok/prestashop-composables'
        }
      }
    }],
    // @core-development-only-end
    /* project-only-start
    ['@vue-storefront/nuxt-theme'],
    project-only-end */
  ],
  modules: [
    'nuxt-i18n',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    ['storyblok-nuxt', {accessToken: 'LUoRLQRAKwVwhczfHBwtrQtt', cacheProvider: 'memory'}]
  ],
  plugins: [
    './plugins/prestashop.js',
    './plugins/storyblok.js'
  ],
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || ''
        })
      })
    ]
  },
  i18n: localeConfig
};
