<template>
  <footer class="footer">
    <div class="bg-brand-navy">
      <div class="text-white text-center max-w-7xl py-6 sm:py-12 layout-w-normal">
        <div class="lg:flex justify-between text-left mb-6 mg:mb-0">
          <NuxtLink to="/" class="block w-36 h-8 mb-8 mr-12">
            <svgo-logo-white filled />
          </NuxtLink>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-4">
            <div v-for="(page, index) in mainPages" :key="index" class="">
              <h2 class="text-brand-nl font-normal tracking-wide text-xl md:text-lg mb-4">{{ page.heading }}</h2>
              <NuxtLink 
                v-for="(link, index) in page.links" 
                :key="index" 
                :to="link.to" 
                class="block text-base md:text-sm font-neworder tracking-wide text-white hover:text-brand-nl transition mb-3"
              >{{ link.name }}</NuxtLink>
            </div>
          </div>

          <div class="w-36 text-left lg:text-right lg:ml-12">
            <a href="/contact" class="uppercase text-white text-opacity-70 md:text-opacity-50 hover:text-opacity-100 tracking-wider font-neworder">Regions</a>
          </div>
        </div>

        <div class="border-t border-white border-opacity-20 pt-4">
          <ul class="lg:flex md:justify-center mb-4 w-full">
            <li v-for="(page, index) in legalPages" :key="index" class="text-left mb-3 lg:mb-0 lg:px-4">
              <NuxtLink :to="page.to" class="inline-block text-sm lg:text-xs font-neworder tracking-wide text-white text-opacity-70 md:text-opacity-50  hover:text-opacity-90 transition">{{ page.name }}</NuxtLink>
            </li>
            <li class="pt-4 lg:pt-0">
              <span class="text-xs text-white text-opacity-70 md:text-opacity-50 font-light lg:px-4">&copy; {{ year }} AMPYR Global Energy Holdings Pte. Ltd.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear()

  const mainPages = [
    {
      heading: 'Ampyr voor U',
      links: [
        {
          name: 'Grondeigenaren',
          to: '/grondeigenaren',
        },
        {
          name: 'Gemeenten',
          to: '/gemeenten',
        },
        {
          name: 'Energie Cooperaties',
          to: '/energie-cooperaties',
        },
      ]
    },
    {
      heading: 'Energie Oplossingen',
      links: [
      {
          name: 'Kennismaking',
          to: '/kennismaking',
        },
        {
          name: 'Grondgebonden Zonneparken',
          to: '/grondgebonden-zonneparkenn',
        },
        {
          name: 'Energie Verkoop',
          to: '/energie-verkoop',
        },
      ]
    },
    {
      heading: 'Over Ons',
      links: [
        {
          name: 'Ampyr Solar Nederland',
          to: '/ampyr-solar-nederland',
        },
        {
          name: 'Duurzaam',
          to: '/duurzaam',
        },
        {
          name: 'Strategy',
          to: '/strategy',
        },
        {
          name: 'Leadership',
          to: '/leadership',
        },
      ]
    },
    {
      heading: 'Insights',
      links: [
        {
          name: 'Individual News & Resources',
          to: '/news',
        },
      ]
    },
  ]

  const legalPages = [
  {
      name: 'All Components',
      to: '/components',
    },
    {
      name: 'Cookie Policy',
      to: '/cookie-policy',
    },
    {
      name: 'Terms & Conditions',
      to: '/terms-conditions',
    },
    {
      name: 'Privacy Policy',
      to: '/privacy-policy',
    },
    {
      name: 'Get In Touch',
      to: '/contact',
    },
  ]
</script>