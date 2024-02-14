<template>
  <section v-editable="blok" class="newsfeed-recent">
    <div class="relative">
      <svg class="svg-curve-up-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" preserveAspectRatio="none">
        <path fill="#181f49" d="M0,24 Q50,0 100,24 V24 H0 Z" />
      </svg>
      <div class="bg-brand-navy py-14 lg:pb-24 lg:pt-20">
        <div class="max-w-xl lg:max-w-7xl layout-w-normal">
          <Heading text="light" copy="Latest from us..." />
          <div class="grid lg:grid-cols-3 gap-8 mb-12 lg:mb-20">
            <NewsfeedCard v-for="(card, index) in cards" :key="index" :card="card" />
          </div>
          <div class="flex justify-center">
            <Button theme="light" :link="button.link" :text="button.label" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })

const cards = ref(null)

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  starts_with: 'news',
  is_startpage: false,
  sort_by: 'published_at:desc'
})

cards.value = data.stories

const button = {
  label: 'Read more updates',
  link: {
    cached_url: '/news'
  }
}
</script>