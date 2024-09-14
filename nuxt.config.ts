// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-headlessui',
    'nuxt-vitest',
    '@nuxt/devtools'
  ],

  experimental: {
    reactivityTransform: true
  },

  css: ['~/assets/css/style.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  colorMode: {
    classSuffix: ''
  },

  headlessui: {
    prefix: ''
  },
  compatibilityDate: '2024-08-24'
})
