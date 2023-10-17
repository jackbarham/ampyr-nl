<template>
    <header class="header-simple bg-white">
    <div class="border-b-2 border-gray-100">
      <div class="mx-auto max-w-7xl p-4 md:p-6">
        <div class="flex justify-between">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex">
              <h1>AMPYR</h1>
            </NuxtLink>
          </div>
          <div class="flex items-center justify-end">
            <NuxtLink 
              v-for="(page, index) in pages" 
              :key="index" 
              :to="page.to" 
              class="ml-8"
            >{{ page.name }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  const pages = [
    {
      to: '/about',
      name: 'About'
    },
    {
      to: '/expertise',
      name: 'Expertise'
    },
    {
      to: '/sustainability',
      name: 'Sustainability'
    },
    {
      to: '/careers',
      name: 'Careers'
    },
    {
      to: '/contact',
      name: 'Contact'
    },
  ]
</script>