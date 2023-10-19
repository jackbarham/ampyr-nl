<template>
  <header class="header absolute top-0 w-full z-50">
    <div class="flex justify-between w-full h-20 bg-gradient-to-b from-[#181F49] items-center px-12">
      <NuxtLink to="/" class="w-32 h-8 shrink-0">
        <svgo-logo-colour />
      </NuxtLink>
      <div class="nav">
        <NuxtLink 
          v-for="(page, index) in pages" 
          :key="index" 
          :to="page.to" 
          class="px-6 py-4 text-white tracking-wide"
        >{{ page.name }}</NuxtLink>
      </div>
      <div class="w-32 text-right shrink-0">
        <span class="text-white uppercase font-light tracking-widest">Regions</span>
      </div>
    </div>
  </header>
</template>

<script setup>
  const pages = [
    {
      to: '/partner',
      name: 'Partner With Us'
    },
    {
      to: '/energy-solutions',
      name: 'Energy Solutions'
    },
    {
      to: '/case-studies',
      name: 'Case Studies'
    },
    {
      to: '/about',
      name: 'About Us'
    },
    {
      to: '/insights',
      name: 'Insights'
    },
    {
      to: '/careers',
      name: 'Join Us'
    },
    {
      to: '/contact',
      name: 'Contact'
    },
  ]
</script>