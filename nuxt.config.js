export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Designer Clothes',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'title',
        property: 'title',
        content: 'Clothes Design'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'description'
      },
      {
        hid: 'image',
        property: 'image',
        content: '/clothes.jpeg'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.google.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Clothes Design'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'description'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/clothes.jpeg'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '200'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '200'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.google.com'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Clothes Design'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'description'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/clothes.jpeg'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
