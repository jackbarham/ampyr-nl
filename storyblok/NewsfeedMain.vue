<template>
  <section v-editable="blok" class="newsfeed-main">
    <div class="bg-brand-grey py-14 lg:pb-24 lg:pt-20">
      <div class="max-w-xl md:max-w-4xl lg:max-w-7xl layout-w-normal">
        <NewsfeedFeatured v-if="featuredNews[0]" :card="featuredNews[0]" class="mb-8 md:mb-12" />
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
const route = useRoute()
const storyblokApi = useStoryblokApi()
const allNewsPosts = ref(null)
const featuredNews = ref(null)

// Get all news posts
const { data } = await storyblokApi.get('cdn/stories', {
  starts_with: 'news',
  is_startpage: false,
})
allNewsPosts.value = data.stories

// Get featured news post
const { data: featuredData } = await storyblokApi.get(`cdn/stories${route.path}`, {
  version: 'published',
  resolve_relations: ['newsfeed-main.featured_news'],
})
featuredNews.value = featuredData.rels

// News posts category filter
const currentCategory = ref('')

const uniqueCategories = computed(() => {
  const categories = new Set()
  allNewsPosts.value.forEach(project => {
    categories.add(project.content.category)
  })
  return Array.from(categories)
})

const filteredItems = computed(() => {
  if (!currentCategory.value) {
    return allNewsPosts.value
  }
  return allNewsPosts.value.filter(post => post.content.category === currentCategory.value)
})
</script>