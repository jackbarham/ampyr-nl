<template>
  <section v-editable="blok" class="vacancies">
    <div class="bg-brand-navy layout-p-normal">
      <div class="max-w-lg md:max-w-6xl layout-w-normal">
        <Heading text="light" :copy="blok.heading" />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="(vacancy, index) in vacancies" 
            :key="index" 
            :to="vacancy.full_slug"
            class="relative block bg-brand-navy-dark p-6 rounded-lg min-h-[192px] scale-1 hover:scale-[103%] transition-all shadow-lg"
          >
            <h2 class="text-brand-nl text-xl font-normal tracking-wide mb-2">{{ vacancy.content.title }}</h2>
            <p class="c-wheat text-sm font-light">{{ vacancy.content.preview }}</p>
            <div class="absolute bottom-6 left-6">
              <div class="flex items-center text-brand-nl tracking-wide font-neworder text-sm md:text-base">
                <span>Read the job description</span>
                <span class="inline-block w-4 h-4 ml-2">
                  <svgo-chevron-right filled class="fill-ps-nl" />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div v-if="blok.button[0]" class="flex justify-center pt-20">
          <Button theme="light" :link="blok.button[0].link" :text="blok.button[0].label" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })

const vacancies = ref(null)

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  starts_with: 'careers',
  is_startpage: false,
  sort_by: 'published_at:desc'
})
vacancies.value = data.stories
</script>