import webpack from 'webpack';

export default {
  mode: 'universal',
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
        name: 'product',
        path: '/:slug/',
        component: resolve( 'pages/Product.vue')
      });
      routes.unshift({
        name: 'category',
        path: '/:slug',
        component: resolve( 'pages/Category.vue')
      });
      routes.unshift({
        name: 'urlresolver',
        path: '/:slug',
        component: resolve('pages/UrlResolver.vue')
      });
    }
  },
  css: ['@/assets/scss/main.scss'],
  loading: { color: '#fff' },
  buildModules: [
    // to core
    '@nuxt/typescript-build',
    '@nuxtjs/router-extras',
    // '@nuxtjs/pwa',
    ['@vue-storefront/nuxt', {
      coreDevelopment: true,
      useRawSource: {
        dev: [
          '@jkawulok/prestashop-composables',
          '@jkawulok/storyblok',
          '@vue-storefront/core',
          '@marvinrudolph/vue-storyblok-rich-text-renderer'
        ],
        prod: [
          '@jkawulok/prestashop-composables',
          '@jkawulok/storyblok',
          '@vue-storefront/core',
          '@marvinrudolph/vue-storyblok-rich-text-renderer'
        ]
      }
    }],
    ['@vue-storefront/nuxt-theme', {
      apiClient: '@jkawulok/prestashop-api',
      composables: '@jkawulok/prestashop-composables'
    }]
  ],
  modules: [
    'nuxt-i18n',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    ['storyblok-nuxt', {accessToken: 'LUoRLQRAKwVwhczfHBwtrQtt', cacheProvider: 'memory'}]
  ],
  plugins: [
    './plugins/prestashop.js',
    './plugins/storyblok.js',
    './plugins/rich-text-renderer.js'
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
  }
};
