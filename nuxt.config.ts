// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
  ],
  app: {
    // pageTransition: { 
    //   name: 'page', 
    //   mode: 'out-in'
    // },
    head: {
      title: 'AMPYR',
      meta: [
        { name: 'description', content: 'General website description' }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://rsms.me/inter/inter.css'
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
