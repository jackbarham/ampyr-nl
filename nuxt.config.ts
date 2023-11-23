// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'vue3-carousel-nuxt',
  ],
  app: {
    head: {
      title: 'AMPYR NL',
      meta: [
        { name: 'description', content: 'General website description' }
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
        // { 
        //   rel: 'shortcut icon', 
        //   type: 'image/png', 
        //   href: 'https://static.jackbarham.com/themeship/favicon.png'
        // }
      ]
    }
  }
})
