<template>
  <header class="header absolute top-0 w-full z-50">
    <div class="flex justify-between w-full h-20 bg-gradient-to-b from-[#181F49] items-center px-4 lg:px-8">
      
      <NuxtLink to="/" class="w-32 h-8 shrink-0">
        <svgo-logo-colour />
      </NuxtLink>

      <div class="visible xl:hidden w-10 h-10">
        <svgo-burger />
      </div>

      <ul class="nav hidden xl:flex">
        <li 
          v-for="(page, index) in pages" 
          :key="index" 
          class="group relative text-white tracking-wide hover:bg-opacity-10 hover:bg-white rounded"
        >
          <NuxtLink v-if="page.to" :to="page.to" class="block px-5 py-3">{{ page.parent }}</NuxtLink>
          <span v-if="!page.to" class="block px-5 py-3 cursor-pointer">{{ page.parent }}</span>
          <ul class="nav-sub absolute left-0 min-w-[200px] bg-white text-black hidden group-hover:block rounded">
            <li 
              v-for="(link, subIndex) in page.links" 
              :key="subIndex"
              class=""
            >
              <NuxtLink v-if="link.to" :to="link.to" class="block px-4 py-2 hover:bg-gray-200 rounded">{{ link.page }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>

      <div class="hidden xl:flex">
        <div class="w-32 text-right shrink-0">
          <span class="text-white uppercase font-light tracking-widest">Regions</span>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
  const pages = [
    {
      parent: 'Partner With Us',
      links: [
        {
          page: 'Landowners',
          to: '/landowners',
        },
        {
          page: 'Municipalities',
          to: '/municipalities',
        },
        {
          page: 'Energy Cooperatives',
          to: '/energy-cooperatives',
        },
      ]
    },
    {
      parent: 'Energy Solutions',
      links: [
        {
          page: 'At A Glance',
          to: '/at-a-Glance',
        },
        {
          page: 'Ground-based Solar Generation',
          to: '/ground-based-solar-generation',
        },
        {
          page: 'International Reach',
          to: '/international-reach',
        },
      ]
    },
    {
      parent: 'Portfolio',
      to: '/portfolio',
    },
    {
      parent: 'About Us',
      links: [
        {
          page: 'AMPYR Solar Europe',
          to: '/Aampyr-solar-europe',
        },
        {
          page: 'Leadership Team',
          to: '/leadership-team',
        },
      ]
    },
    {
      parent: 'Join Us',
      to: '/careers',
    },
    {
      parent: 'Contact',
      to: '/contact',
    },
  ]
</script>