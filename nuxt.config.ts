import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'vue3-carousel-nuxt',
    ['@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        bridge: true,
        use: [apiPlugin],
      }]
  ],
  image: {
    quality: 90,
    format: ['webp'],
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en'],
    defaultLocale: 'en', // default locale
  },
  app: {
    head: {
      title: 'AMPYR NL',
      meta: [
        {
          name: 'description',
          content: 'AMPYR Europe corporate website'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://rsms.me/inter/inter.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/iiw3pli.css'
        },
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: 'https://static.jackbarham.com/ampyr/favicon.png'
        }
      ]
    }
  }
})
