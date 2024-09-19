import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}'
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'light-a': '#FFFFFF',
      'dark-a': '#717399',
      'dark-b': '#131235',
      'dark-c': '#0F0F0F',
      'wildcard-a': '#0919FF',
      'wildcard-b': '#FF090D'
    }
  },
} satisfies Config;
