import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nemis',
    title: 'nemis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~layouts/global.css",],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        // light: {
        //   primary: "#003B95",
        //   accent: "#ffffff",
        //   secondary: "#ffffff",
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3,
        // },
        light: {
          primary: '#14a1e1',
          accent: '#c5f4ff',
          secondary: '#e06e14',
          palette: '#0e839d',
          bg: '#003B95',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          danger: '#FF0000',
          outlineRed: '#FF0000',
          principal: '#225a66',
          schoolOwner: '#222d66',
          scde: '#144e1a',
          countyDirectorOfEducation: '#144c4e',
          textColor: '#2B5B88',
          blueButtonColor: '#3a649e',
          background: '#f6fbff', // specific to the principal dashboard
          titletext: '#3a649e' // specific to the principal dashboard
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
