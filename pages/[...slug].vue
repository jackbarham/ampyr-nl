<template>
  <StoryblokComponent v-if="pending === false && story.story" :blok="story.story.content" :siteConfig="story?.siteConfig" />
</template>

<script setup>
const { $preview } = useNuxtApp()
const { slug } = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'

// API options
// Preview & Production approach: "isPreview ? 'draft' : 'published'"
const version = $preview ? 'draft' : 'published' 
const { locale } = useI18n()
const resolveRelations = []

// Full Static with refresh approach
const { data: story, pending } = await useAsyncData(
  `${locale.value}-${url}`,
  async () => {
    // get site-config story and set as global variable
    const { data: siteConfig } = await useStoryblokApi().get(`cdn/stories/site-config`, {
      version,
      language: locale.value,
      resolve_relations: resolveRelations
    })
    const { data } = await useStoryblokApi().get(`cdn/stories/${url.replace(/\/$/, '')}`, {
      version,
      language: locale.value,
      resolve_relations: resolveRelations
    })
    // return data?.story and siteConfig
    return { story: data?.story, siteConfig: siteConfig?.story?.content }
  },
);

if (!$preview) { 
  // Preview & Production approach: "!isPreview"
  if (!story.value) {
    showError({ statusCode: 404, statusMessage: "Page Not Found" })
  }
}

onMounted(() => {
  definePageMeta({
    middleware: ['header-theme']
  })

  // Load the brigde in preview mode
  if ($preview && story.value && story.value.id) { 
    // Preview & Production approach: "isPreview && story.value && story.value.id"
    useStoryblokBridge(
      story.value.id,
      (evStory) => story.value = evStory,
      {
        resolveRelations,
      }
    );
  }
})
</script>