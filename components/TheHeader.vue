<template>
  <header class="header absolute top-0 w-full z-50">
    <div class="flex justify-between w-full h-20 bg-gradient-to-b from-[#181F49] items-center px-12">
      
      <NuxtLink to="/" class="w-32 h-8 shrink-0">
        <svgo-logo-colour />
      </NuxtLink>

      <ul class="nav flex">
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

      <div class="w-32 text-right shrink-0">
        <span class="text-white uppercase font-light tracking-widest">Regions</span>
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
          page: 'Partner',
          to: '/partner',
        },
        {
          page: 'Partner',
          to: '/partner',
        },
        {
          page: 'Partner',
          to: '/partner',
        },
      ]
    },
    {
      parent: 'Energy Solutions',
      links: [
        {
          page: 'Partner',
          to: '/partner',
        },
        {
          page: 'Partner',
          to: '/partner',
        },
        {
          page: 'Partner',
          to: '/partner',
        },
      ]
    },
    {
      parent: 'Portfolio',
      to: '/partner',
    },
    {
      parent: 'About Us',
      links: [
        {
          page: 'Partner',
          to: '/partner',
        },
        {
          page: 'Partner',
          to: '/partner',
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