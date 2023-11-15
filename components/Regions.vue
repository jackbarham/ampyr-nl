<template>
  <div class="regions relative">
    <div class="w-auto xl:w-28 text-left lg:text-right shrink-0 group/show">
      <div 
        class="lg:flex lg:justify-end relative lg:hover:bg-opacity-10 lg:hover:bg-white cursor-pointer rounded-lg"
        @click="toggleDropdown"
      >
        <div 
          class="flex text-white uppercase text-base lg:text-sm tracking-widest px-4 xl:px-3 py-3"
          :class="{'!c-navy lg:hover:bg-opacity-60': menuClass === 'menu-dark'}"
        >
          <span class="block mr-1">Regions</span>
          <span class="block relative top-0.5 w-4 h-4">
            <svgo-chevron-down filled :class="{ 'lg:fill-s-navy': menuClass === 'menu-dark' }" />
          </span>
        </div>
        
        <ul
          class="nav-sub lg:shadow-xl lg:absolute z-10 right-0 top-[42px] w-[256px] c-bg-navy rounded-lg py-0 lg:py-3 pl-2 lg:pl-0 mb-2 lg:mb-0 lg:group-hover/show:block"
          :class="`${isDropdownOpen ? 'block' : 'hidden'}`"
        >
          <li 
            v-for="(region, index) in regions" 
            :key="index"
            class="c-wheat hover:c-orange text-left"
          >
            <NuxtLink :to="region.link" @click="closeMenu()" class="flex items-center px-2 lg:px-6 py-2 rounded group">
              <img class="w-6 h-6 mr-4" :src="region.flag" :alt="region.name">
              <span class="flex w-full justify-between">
                <span>{{ region.name }}</span>
                <span class="flex w-6 h-6">
                  <svgo-arrow-right filled class="fill-fp-white group-hover:fill-fp-orange" />
                </span>
              </span>
            </NuxtLink>
          </li>
        </ul>

      </div> 

    </div>
  </div>
</template>

<script setup>
const { menuClass } = useMenuClass()

const isDropdownOpen = ref(false)

function toggleDropdown() {
  if (window.innerWidth < 1024) {
    isDropdownOpen.value = !isDropdownOpen.value
  }
}

function handleResize() {
  closeRegrions()
}

function closeRegrions() {
  if (window.innerWidth >= 1024) {
    isDropdownOpen.value = false
  } 
}

const regions = [
  {
    name: 'Global',
    flag: 'https://static.jackbarham.com/ampyr/globe-white.png',
    link: '#',
  },
  {
    name: 'Nederland',
    flag: 'https://static.jackbarham.com/ampyr/flag-nl.png',
    link: '#',
  },
  {
    name: 'Deutschland',
    flag: 'https://static.jackbarham.com/ampyr/flag-de.png',
    link: '#',
  },
  {
    name: 'United Kingdom',
    flag: 'https://static.jackbarham.com/ampyr/flag-gb.png',
    link: '#',
  },
]

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>