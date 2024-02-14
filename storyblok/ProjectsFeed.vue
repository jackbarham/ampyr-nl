<template>
  <section v-editable="blok" class="projects-feed">
    <div class="bg-white layout-p-normal">
      <div class="max-w-7xl layout-w-normal">
        <Heading text="dark" :copy="blok.heading" />
        <ElementCategoryFilter 
          :uniqueCategories="uniqueCategories" 
          :currentCategory="currentCategory" 
          @update-category="currentCategory = $event" 
        />
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <template v-for="(project, index) in filteredProjects" :key="index">
            <NuxtLink 
              :class="[ (index + Math.floor(index / 2)) % 2 === 0 ? 'md:col-span-1 lg:col-span-7' : 'md:col-span-1 lg:col-span-5' ]" 
              class="relative rounded-lg overflow-hidden group bg-brand-grey"
              :to="project.full_slug"
            >
              <div class="absolute w-full h-full z-30 p-6">
                <h2 class="text-white text-2xl lg:text-3xl font-normal mb-4">{{ project.content.heading }}</h2>
                <p class="opacity-0 group-hover:opacity-100 transition-opacity">{{ project.content.intro }}</p>
                <div class="absolute left-6 bottom-6 bg-white text-brand-navy text-xs px-3 py-1 rounded-full capitalize">{{ project.content.category }}</div>
                <div class="absolute bottom-6 right-6 w-10 h-10 rounded-full p-0.5 bg-brand-nl">
                  <svgo-arrow-right filled class="fill-ps-navy" />
                </div>
              </div>
              <div class="absolute w-full h-44 bg-gradient-to-b from-black to-transparent"></div>
              <div class="absolute w-full h-full group-hover:bg-brand-navy/70 transition"></div>
              <NuxtImg 
                width="400"
                loading="lazy"
                :src="project.content.image.filename" 
                alt="#" 
                class="w-full h-96 object-cover" 
              />
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })

const projects = ref(null)

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  starts_with: 'portfolio',
  is_startpage: false,
  sort_by: 'published_at:desc'
})
projects.value = data.stories

// Projects category filter
const currentCategory = ref('')

const uniqueCategories = computed(() => {
  const categories = new Set()
  projects.value.forEach(project => {
    categories.add(project.content.category)
  })
  return Array.from(categories)
})

const filteredProjects = computed(() => {
  if (!currentCategory.value) {
    return projects.value
  }
  return projects.value.filter(project => project.content.category === currentCategory.value)
})
</script>