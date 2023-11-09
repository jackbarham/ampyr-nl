<template>
  <div class="grid-people">
    <div class="bg-white py-14 lg:py-24">
      <div class="max-w-sm md:max-w-7xl m-auto px-4 md:px-8">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Leadership team</h1>
        <div class="grid grid-cols-1 gap-10 md:gap-x-4 md:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="(person, index) in people" 
            :key="index" 
            class="relative block overflow-hidden group"
          >
            <div class="relative h-96 md:h-[512px] w-full rounded-2xl overflow-hidden mb-4">
              <div 
                class="toggle-bio absolute z-30 top-4 md:top-6 right-4 md:right-6 w-10 h-10 rounded-full p-2 c-bg-orange cursor-pointer hover:bg-white transition"
                :class="{ '!bg-white': currentOpenBio === index }"
                @click="toggleBio(index)"
              >
                <svgo-plus filled class="fill-navy transition-all" :class="{ 'rotate-45': currentOpenBio === index }" />
              </div>
              <div 
                class="bio absolute w-full h-full bg-indigo-950/80"
                v-show="currentOpenBio === index"
              >
                <p class="px-4 md:px-8 pt-16 md:pt-24 font-no text-lg md:text-xl">{{ person.bio }}</p>
                <div class="absolute bottom-6 left-6">
                  <a :href="person.linkedin" class="flex items-center c-orange tracking-wide font-no text md:text-base">
                    <span>LinkedIn</span>
                    <span class="inline-block w-5 h-5 ml-1">
                      <svgo-chevron-right filled />
                    </span>
                  </a>
              </div>
              </div>
              <img :src="person.image" alt="Description" class="w-full h-full object-cover" />
            </div>
            <div class="px-4 c-navy">
              <h2 class="text-2xl mb-2 pb-3 border-b border-gray-200">{{ person.name }}</h2>
              <p class="tracking-wide font-light">{{ person.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const people = [
  {
    name: 'Tom van Dorp',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'CEO',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Enzo Overtoom',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Business Developer',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Johan Overtoom',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Marketing Professional',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Marco Blok',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Project - en Procesmanagement',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Paulien Benschop',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Investment Analyst',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Rebecca Kolfschoten',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Office Manager',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
]

const currentOpenBio = ref(null)

const toggleBio = (index) => {
  if (currentOpenBio.value === index) {
    currentOpenBio.value = null
  } else {
    currentOpenBio.value = index
  }
}
</script>