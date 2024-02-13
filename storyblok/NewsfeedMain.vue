<template>
  <section v-editable="blok" class="newsfeed-main">
    <div class="bg-brand-grey py-14 lg:pb-24 lg:pt-20">
      <div class="max-w-xl md:max-w-4xl lg:max-w-7xl layout-w-normal">
        <!-- <NewsfeedFeatured :cards="filteredItems" class="mb-8 md:mb-12" /> -->
        <ElementCategoryFilter 
          :uniqueCategories="uniqueCategories" 
          :currentCategory="currentCategory" 
          @update-category="currentCategory = $event" 
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewsfeedCard v-for="(item, index) in filteredItems" :key="index" :card="item" />
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
  starts_with: 'news',
  is_startpage: false,
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

const filteredItems = computed(() => {
  if (!currentCategory.value) {
    return projects.value
  }
  return projects.value.filter(project => project.content.category === currentCategory.value)
})
</script>