<template>
  <div class="grid-people">
    <div class="bg-white py-14 lg:py-24">
      <div class="max-w-xl lg:max-w-7xl m-auto px-4 md:px-8">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Featured projects</h1>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <a 
            v-for="(project, index) in projects" 
            :key="index" 
            class="relative overflow-hidden rounded-2xl group"
            :href="project.link"
          >
            <div class="absolute w-full h-full z-30 p-6">
              <h2 class="text-white text-2xl mb-4">{{ project.heading }}</h2>
              <p class="font-no text-sm opacity-0 group-hover:opacity-100 transition-opacity">{{ project.text }}</p>
              <div class="absolute left-6 bottom-6 bg-white c-navy text-xs px-3 py-1 rounded-full capitalize">{{ project.category }}</div>
              <div class="absolute bottom-6 right-6 w-10 h-10 rounded-full p-0.5 c-bg-orange">
                <svgo-arrow-right filled class="fill-p-navy" />
              </div>
            </div>
            <div class="absolute w-full h-40 bg-gradient-to-b from-black to-transparent opacity-80"></div>
            <div class="absolute w-full h-full group-hover:backdrop-blur-sm transition"></div>
            <img :src="project.image" alt="Description" class="w-full h-80 object-cover">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const people = [
    {
      heading: 'Project name spanning over multiple lines',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
      category: 'Category One',
      linkedin: '#',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
  ]
</script>