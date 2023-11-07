<template>
  <div class="statistics">
    <div class="c-bg-navy py-14 lg:py-24">
      <div class="max-w-6xl m-auto px-4 md:px-8">
        <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Pan-European Pipeline of Solar Energy Solutions</h1>
        <div class="lg:grid lg:grid-cols-3 lg:gap-4 text-center">
          <div 
            v-for="(stat, index) in stats" 
            :key="index" 
            class="mb-12 last:mb-0 lg:mb-0"
          >
            <div class="mb-6">
              <img class="w-10 h-10 m-auto mb-4" :src="stat.flag" :alt="stat.country" />
              <p class="font-light uppercase text-sm tracking-widest">{{ stat.country }}</p>
            </div>
            <div class="relative rounded-full w-48 h-48 m-auto flex items-center mb-6">
              <div class="relative z-10 text-center w-48">
                <span class="block text-5xl font-medium font-no mb-1">{{ stat.mw }}</span>
                <span class="uppercase text-2xl block font-no mb-2">mw</span>
                <span class="block uppercase text-sm font-light tracking-widest">{{ stat.projects }} projects</span>
              </div>
              <img :src="stat.image" alt="Description" class="absolute w-48 h-48 object-cover rounded-full opacity-50">
            </div>
            <div class="mb-4">
              <p class="font-no text-2xl mb-1" :class="stat.color">{{ stat.devopment }}<span class="text-lg uppercase font-light">mw</span></p>
              <p class="ont-light uppercase text-xs tracking-widest">Under development</p>
            </div>
            <div class="mb-0">
              <p class="font-no text-2xl mb-1" :class="stat.color">{{ stat.construction }}<span class="text-lg uppercase font-light">mw</span></p>
              <p class="ont-light uppercase text-xs tracking-widest">Under construction</p>
            </div>
          </div>
        </div>
      </div>
      <svgo-test2 filled class="hidden lg:block pt-20 opacity-80" />
    </div>
  </div>
</template>

<script setup>
  const stats = [
    {
      country: 'United Kingdom',
      flag: 'https://static.jackbarham.com/ampyr/flag-gb.png',
      mw: '1,695',
      projects: '34',
      devopment: '1,685',
      construction: '10',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      color: 'c-blue',
    },
    {
      country: 'Netherlands',
      flag: 'https://static.jackbarham.com/ampyr/flag-nl.png',
      mw: '1,890',
      projects: '68',
      devopment: '1,782',
      construction: '108',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      color: 'c-orange',
    },
    {
      country: 'Germany',
      flag: 'https://static.jackbarham.com/ampyr/flag-de.png',
      mw: '3,871',
      projects: '147',
      devopment: '3,856',
      construction: '15',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      color: 'c-purple',
    },
  ]
</script>