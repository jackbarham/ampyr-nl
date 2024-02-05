<template>
  <section v-editable="blok" class="newsfeed-main">
    <div class="bg-brand-grey py-14 lg:pb-24 lg:pt-20">
      <div class="max-w-xl md:max-w-4xl lg:max-w-7xl layout-w-normal">
        <NewsfeedFeatured :cards="filteredItems" class="mb-8 md:mb-12" />
        <ElementCategoryFilter 
          :uniqueCategories="uniqueCategories" 
          :currentCategory="currentCategory" 
          @update-category="currentCategory = $event" 
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- <NewsfeedCard v-for="(item, index) in filteredItems" :key="index" :card="item" /> -->
        </div>

        <p class="text-brand-navy text-center mt-10">Dynamic content required - Error with NewsfeedCard </p>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  }
})

const items = {
  cards: [
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe and Multiplex Sign PPA for Solar Power Station in Norfolk',
      link: 'press/demo-press-release-content',
      category: 'Press release',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe And Asahi Europe & International Sign PPA For Dutch Drinks Production',
      link: 'press/demo-press-release-content',
      category: 'Article',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe Acquires 390 MW UK Solar PV Portfolio From Tyler Hill',
      link: 'press/demo-press-release-content',
      category: 'Blog',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe and Multiplex Sign PPA for Solar Power Station in Norfolk',
      link: 'press/demo-press-release-content',
      category: 'Press release',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe And Asahi Europe & International Sign PPA For Dutch Drinks Production',
      link: 'press/demo-press-release-content',
      category: 'Article',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe Acquires 390 MW UK Solar PV Portfolio From Tyler Hill',
      link: 'press/demo-press-release-content',
      category: 'Blog',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe and Multiplex Sign PPA for Solar Power Station in Norfolk',
      link: 'press/demo-press-release-content',
      category: 'Press release',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe And Asahi Europe & International Sign PPA For Dutch Drinks Production',
      link: 'press/demo-press-release-content',
      category: 'Article',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe Acquires 390 MW UK Solar PV Portfolio From Tyler Hill',
      link: 'press/demo-press-release-content',
      category: 'Blog',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
  ]
}

const currentCategory = ref('')

const uniqueCategories = computed(() => {
  const categories = new Set()
  items.cards.forEach(item => categories.add(item.category))
  return Array.from(categories)
})

const filteredItems = computed(() => {
  if (!currentCategory.value) {
    return items.cards
  }
  return items.cards.filter(item => item.category === currentCategory.value)
})
</script>