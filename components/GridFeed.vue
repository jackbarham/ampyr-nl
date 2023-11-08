<template>
  <div class="grid-feed">
    <div class="bg-white py-14 lg:py-24">
      <div class="max-w-7xl m-auto px-4 md:px-8">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 lg:mb-16 max-w-md lg:max-w-full m-auto">Featured projects</h1>
        <div class="md:flex justify-center items-center text-center mb-4 lg:mb-8">
          <p class="c-navy mx-1 mb-4 md:mb-2 text-sm tracking-wider uppercase">Filter by:</p>
          <div class="flex flex-wrap justify-center items-center">
            <span 
              class="block mx-1 mb-2 c-navy text-xs px-3 py-1 rounded-full border border-navy capitalize hover:cursor-pointer"
              :class="{ 'c-bg-navy !text-white': currentCategory === '' }"
              @click="currentCategory = ''"
            >All projects</span>
            <span 
              v-for="category in uniqueCategories" 
              :key="category" 
              class="block mx-1 mb-2 c-navy text-xs px-3 py-1 rounded-full border border-black capitalize hover:cursor-pointer" 
              :class="{ 'c-bg-navy !text-white': currentCategory === category }"
              @click="currentCategory = category"
            >{{ category }}</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <template v-for="(project, index) in filteredProjects" :key="index">
            <a 
              :class="[(index + Math.floor(index / 2)) % 2 === 0 ? 'md:col-span-1 lg:col-span-7' : 'md:col-span-1 lg:col-span-5']" 
              class="relative rounded-lg overflow-hidden group"
              :href="project.link"
            >
              <div class="absolute w-full h-full z-30 p-6">
                <h2 class="text-white text-2xl lg:text-3xl font-normal mb-4">{{ project.heading }}</h2>
                <p class="font-no opacity-0 group-hover:opacity-100 transition-opacity">{{ project.text }}</p>
                <div class="absolute left-6 bottom-6 bg-white c-navy text-xs px-3 py-1 rounded-full capitalize">{{ project.category }}</div>
                <div class="absolute bottom-6 right-6 w-10 h-10 rounded-full p-0.5 c-bg-orange">
                  <svgo-arrow-right filled class="fill-p-navy" />
                </div>
              </div>
              <div class="absolute w-full h-44 bg-gradient-to-b from-black to-transparent"></div>
              <div class="absolute w-full h-full group-hover:backdrop-blur-sm transition"></div>
              <img :src="project.image" alt="Description" class="w-full h-96 object-cover">
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const projects = [
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category One',
    link: '#',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category Three',
    link: '#',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category Three',
    link: '#',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category two',
    link: '#',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category Four',
    link: '#',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category two',
    link: '#',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
]

const currentCategory = ref('')

const uniqueCategories = computed(() => {
  const categories = new Set()
  projects.forEach(project => categories.add(project.category))
  return Array.from(categories)
})

const filteredProjects = computed(() => {
  if (!currentCategory.value) {
    return projects
  }
  return projects.filter(project => project.category === currentCategory.value)
})
</script>