<template>
  <header class="header absolute top-0 w-full z-50 f-new-order">
    <div class="flex justify-between w-full h-20 bg-gradient-to-b from-[#181F49] items-center px-4 lg:px-8">
      
      <NuxtLink to="/" class="logo relative z-10 w-32 h-8 shrink-0">
        <svgo-logo-colour filled />
      </NuxtLink>

      <div @click="isMenuOpen = !isMenuOpen" class="menuToggle relative z-10 visible lg:hidden w-10 h-10 cursor-pointer">
        <svgo-burger filled />
      </div>

      <ul :class="`nav lg:flex fixed lg:relative top-0 right-0 lg:top-auto lg:right-auto pt-24 px-4 lg:px-0 lg:pt-0 w-full sm:w-80 lg:w-auto h-full lg:h-auto c-bg-navy lg:bg-transparent transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`">
        <li 
          v-for="(page, index) in pages" 
          :key="index" 
          class="group relative text-white tracking-wide hover:bg-opacity-10 hover:bg-white rounded text-lg"
        >
          <NuxtLink v-if="page.to" :to="page.to" class="block px-4 xl:px-5 py-2">{{ page.parent }}</NuxtLink>
          <span v-if="!page.to" class="flex items-center px-4 py-2 cursor-pointer">
            <span class="mr-1">{{ page.parent }}</span>
            <span class="block w-4 h-4">
              <svgo-chevron-down filled />
            </span>
          </span>
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

      <div class="regions hidden lg:flex">
        <div class="w-auto xl:w-32 text-right shrink-0">
          <span class="text-white uppercase font-light tracking-widest">Regions</span>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
// import { ref } from 'vue';

const isMenuOpen = ref(false);

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
          page: 'At a Glance',
          to: '/at-a-glance',
        },
        {
          page: 'Ground-based Solar Generation',
          to: '/ground-based-solar-generation',
        },
        {
          page: 'Power Distribution',
          to: '/power-distribution',
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
          to: '/ampyr-solar-europe',
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

  // Method to handle submenu visibility
function toggleSubMenu(index) {
  // Logic to show/hide submenu and ensure only one is open at a time
  pages.forEach((page, i) => {
    if (page.links) {
      if (i === index) page.isOpen = !page.isOpen
      else page.isOpen = false
    }
  })
}

// Add isOpen property to each page with links
pages.forEach(page => {
  if (page.links) page.isOpen = false
})
</script>