<template>
  <header class="header absolute top-0 w-full z-50 f-new-order" :class="menuClass">
    <div 
      v-if="showHeader"
      class="flex justify-between w-full h-20 bg-gradient-to-b from-[#181F49] items-center px-4 lg:px-8"
      :class="{ 'from-transparent': menuClass === 'menu-dark' }"
    >
      
      <NuxtLink to="/" class="logo block relative z-10 w-40 h-10 shrink-0">
        <svgo-logo-white v-if="menuClass === 'menu-light' || (menuClass === 'menu-dark' && menuOpen)" filled />
        <svgo-logo-blue v-if="menuClass === 'menu-dark' && !menuOpen" filled />
      </NuxtLink>

      <div @click="toggleMenu()" class="menuToggle relative z-10 visible lg:hidden w-10 h-10 cursor-pointer">
        <svgo-burger v-if="!menuOpen" :class="{ 'fill-s-navy': menuClass === 'menu-dark' }" filled />
        <svgo-close v-else filled />
      </div>

      <div 
        class="fixed overflow-x-scroll lg:overflow-x-visible lg:relative top-0 right-0 lg:top-auto lg:right-auto pt-24 lg:pt-0 pb-12 lg:pb-0 px-4 lg:px-0 w-full sm:w-96 lg:w-auto h-full lg:h-auto c-bg-navy lg:bg-transparent transform transition-transform"
        :class="`${menuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`"
      >
        <ul class="nav lg:flex">
          <li 
            class="block lg:hidden relative text-white tracking-wide lg:hover:bg-opacity-10 lg:hover:bg-white rounded-lg text-2xl lg:text-lg"
            :class="{ 'text-white lg:c-navy': menuClass === 'menu-dark' }"
          >
            <NuxtLink to="/" @click="closeMenu" class="block px-4 xl:px-5 py-2">Home</NuxtLink>
          </li>
          <li 
            v-for="(page, index) in pages" 
            :key="index" 
            class="group relative text-white tracking-wide lg:hover:bg-opacity-10 lg:hover:bg-white rounded-lg text-2xl lg:text-base xl:text-lg"
            :class="{ 'text-white lg:c-navy lg:hover:bg-opacity-60': menuClass === 'menu-dark' }"
          >
            <NuxtLink v-if="page.to" :to="page.to" @click="closeMenu()" class="block px-4 lg:px-2 xl:px-5 py-3">{{ page.parent }}</NuxtLink>
            <span v-if="!page.to" @click="toggleSubmenu(page)" class="flex items-center px-4 py-3 cursor-pointer">
              <span class="mr-1">{{ page.parent }}</span>
              <span class="block w-4 h-4">
                <svgo-chevron-down filled :class="{ 'lg:fill-s-navy': menuClass === 'menu-dark' }" />
              </span>
            </span>
            <ul 
              v-if="!page.to"
              class="nav-sub lg:shadow-xl lg:absolute z-10 left-0 min-w-[256px] c-bg-navy rounded-lg lg:group-hover:block list-disc marker:text-white/40 lg:list-none py-0 lg:py-3 pl-8 lg:pl-0 mb-2 lg:mb-0"
              :class="`${page.submenuOpen ? 'block' : 'hidden'}`"
            >
              <li 
                v-for="(link, subIndex) in page.links" 
                :key="subIndex"
                class="c-wheat hover:c-orange"
              >
                <NuxtLink v-if="link.to" :to="link.to" @click="closeMenu()" class="block px-2 lg:px-6 py-2 rounded">{{ link.page }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
        <Regions class="block lg:hidden" />
      </div>

      <Regions class="hidden lg:block" />

    </div>
  </header>
</template>

<script setup>
const { menuClass } = useMenuClass()

const showHeader = ref(false)
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  useEvent('toggleFixed')
}

function closeMenu() {
  menuOpen.value = false
  useEvent('closeFixed')
}

const pages = ref([
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
        page: 'Sustainability',
        to: '/sustainability',
      },
      {
        page: 'Vision & Strategy',
        to: '/vision-strategy',
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
].map(page => ({
  ...page,
  submenuOpen: false
})))

function toggleSubmenu(page) {
  if (window.innerWidth < 1024) {
    page.submenuOpen = !page.submenuOpen
    pages.value.forEach(p => {
      if (p !== page) p.submenuOpen = false
    })
  }
}

function resetMenu() {
  if (window.innerWidth >= 1024) {
    pages.value.forEach(p => {
      p.submenuOpen = false
    })
    closeMenu()
  }
}

function handleResize() {
  resetMenu()
}

onMounted(() => {
  showHeader.value = true
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>