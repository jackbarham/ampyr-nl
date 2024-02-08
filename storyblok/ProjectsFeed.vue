<template>
  <section class="projects-feed">
    <div class="bg-white layout-p-normal">
      <div class="max-w-7xl layout-w-normal">
        <Heading text="dark" copy="Our Projects" />
        <ElementCategoryFilter 
          :uniqueCategories="uniqueCategories" 
          :currentCategory="currentCategory" 
          @update-category="currentCategory = $event" 
        />
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <template v-for="(project, index) in filteredProjects" :key="index">
            <NuxtLink 
              :class="[ (index + Math.floor(index / 2)) % 2 === 0 ? 'md:col-span-1 lg:col-span-7' : 'md:col-span-1 lg:col-span-5' ]" 
              class="relative rounded-lg overflow-hidden group"
              :to="project.link"
            >
              <div class="absolute w-full h-full z-30 p-6">
                <h2 class="text-white text-2xl lg:text-3xl font-normal mb-4">{{ project.heading }}</h2>
                <p class="opacity-0 group-hover:opacity-100 transition-opacity">{{ project.text }}</p>
                <div class="absolute left-6 bottom-6 bg-white text-brand-navy text-xs px-3 py-1 rounded-full capitalize">{{ project.category }}</div>
                <div class="absolute bottom-6 right-6 w-10 h-10 rounded-full p-0.5 bg-brand-nl">
                  <svgo-arrow-right filled class="fill-ps-navy" />
                </div>
              </div>
              <div class="absolute w-full h-44 bg-gradient-to-b from-black to-transparent"></div>
              <div class="absolute w-full h-full group-hover:bg-brand-navy/70 transition"></div>
              <img :src="project.image" loading="lazy" alt="Description" class="w-full h-96 object-cover">
              <!-- <NuxtImg 
                width="400"
                loading="lazy"
                :src="project.image" 
                alt="#" 
                class="w-full h-96 object-cover" 
              /> -->
            </NuxtLink>
          </template>
        </div>
      </div>

      <p class="text-brand-navy text-center mt-10">Dynamic content required</p>
      
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category One',
    link: '/portfolio/case-study-demo',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category Three',
    link: '/portfolio/case-study-demo',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category Three',
    link: '/portfolio/case-study-demo',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category two',
    link: '/portfolio/case-study-demo',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category Four',
    link: '/portfolio/case-study-demo',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Project name spanning over multiple lines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'Category two',
    link: '/portfolio/case-study-demo',
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