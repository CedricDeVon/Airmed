import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
  },
  alias: {
    "@": path.resolve(__dirname, "/"),
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    'nuxt-headlessui',
    'nuxt-vitest',
    '@nuxt/devtools'
  ],
  css: ['~/assets/css/main.scss'],
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
  compatibilityDate: '2024-08-24',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Airmed',
      
    
    }
  }
})
// <link rel="icon" type="image/svg+xml" href="/logo.svg">