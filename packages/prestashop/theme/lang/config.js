const locales = [
  {
    code: 'pl',
    file: 'pl.js',
    name: 'en',
    label: 'Polski',
    shopId: 121,
    country: {
      name: 'PL',
      label: 'Polska'
    },
    currency: {
      name: 'PLN',
      label: 'Złoty'
    }
  }
];

export default {
  locales,
  defaultLocale: locales[0].code,
  strategy: 'prefix_except_default',
  lazy: true,
  langDir: 'lang/',
  vueI18n: {
    fallbackLocale: locales[0].code
  },
  detectBrowserLanguage: {
    cookieKey: 'vsf-locale',
    alwaysRedirect: false
  }
};
