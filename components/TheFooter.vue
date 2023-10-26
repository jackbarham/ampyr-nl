<template>
  <footer class="footer-simple c-bg-navy">
    <div class="mx-auto max-w-7xl py-6 md:py-12 px-4 text-white text-center">
      
      <div class="lg:flex justify-between text-left mb-6 mg:mb-0">
        <NuxtLink to="/" class="block w-32 h-8 mb-6">
          <svgo-logo-colour />
        </NuxtLink>
        <div class="lg:flex">
          <div v-for="(page, index) in mainPages" :key="index" class="mb-6 lg:px-8 max-w-[208px]">
            <h2 class="font-light c-nederland text-lg mb-4">{{ page.parent }}</h2>
            <NuxtLink v-for="(link, index) in page.links" :to="link.to" class="block text-sm font-light text-white mb-4">{{ link.name }}</NuxtLink>
          </div>
        </div>
        <div>
          <a href="#" target="_blank" class="uppercase text-white text-opacity-50 tracking-wide font-light">Corporate site</a>
        </div>
      </div>

      <div class="flex items-center border-t border-white border-opacity-40 pt-4">
        <ul class="lg:flex md:justify-center mb-4 md:mb-0 w-full">
          <li v-for="(page, index) in legalPages" :key="index" class="text-left mb-2 lg:mb-0 md:px-4">
            <NuxtLink :to="page.to" class="inline-block text-xs font-light text-white text-opacity-50">{{ page.name }}</NuxtLink>
          </li>
          <li>
            <span class="text-xs text-white text-opacity-50 font-light md:px-4">&copy; {{ year }} AMPYR Global Energy Holdings Pte. Ltd.</span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear()

  const mainPages = [
    {
      parent: 'Partner With Us',
      links: [
        {
          name: 'Landowners',
          to: '/landowners',
        },
        {
          name: 'Municipalities',
          to: '/municipalities',
        },
        {
          name: 'Energy Cooperatives',
          to: '/energy-cooperatives',
        },
      ]
    },
    {
      parent: 'Energy Solutions',
      links: [
        {
          name: 'At A Glance',
          to: '/at-a-Glance',
        },
        {
          name: 'Ground-based Solar Generation',
          to: '/ground-based-solar-generation',
        },
        {
          name: 'International Reach',
          to: '/international-reach',
        },
        {
          name: 'Portfolio',
          to: '/portfolio',
        },
      ]
    },
    {
      parent: 'About Us',
      links: [
        {
          name: 'AMPYR Solar Europe',
          to: '/ampyr-solar-europe',
        },
        {
          name: 'Leadership Team',
          to: '/leadership-team',
        },
      ]
    },
    {
      parent: 'Insights',
      links: [
        {
          name: 'Individual News & Resources',
          to: '/insights',
        },
      ]
    },
  ]

  const legalPages = [
    {
      name: 'Cookie Policy',
      to: '/cookie-policy',
    },
    {
      name: 'Terms and Conditions',
      to: '/terms-conditions',
    },
    {
      name: 'Privacy Policy',
      to: '/privacy-policy',
    },
    {
      name: 'Sitemap',
      to: '/sitemap',
    },
    {
      name: 'Get In Touch',
      to: '/contact',
    },
  ]
</script>