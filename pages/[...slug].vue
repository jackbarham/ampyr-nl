<script setup>
const { $preview } = useNuxtApp() // Preview & Production approach: "const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'"
const { slug } = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'

// API options
const version = $preview ? 'draft' : 'published' // Preview & Production approach: "isPreview ? 'draft' : 'published'"
const { locale } = useI18n()
const resolveRelations = ['popular-articles.articles', 'latest.articles', 'article-page.categories', 'site-config.latest_articles.articles']

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

if (!$preview) { // Preview & Production approach: "!isPreview"
  if (!story.value) {
    showError({ statusCode: 404, statusMessage: "Page Not Found" })
  }
}

// Load the brigde in preview mode
onMounted(() => {
  if ($preview && story.value && story.value.id) { // Preview & Production approach: "isPreview && story.value && story.value.id"
    useStoryblokBridge(
      story.value.id,
      (evStory) => story.value = evStory,
      {
        resolveRelations,
      }
    );
  }
});
</script>

<template>
  <StoryblokComponent v-if="pending === false && story.story" :blok="story.story.content" :siteConfig="story?.siteConfig" />
</template>