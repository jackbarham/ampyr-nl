<template>
  <div v-editable="blok">
    <StoryblokComponent v-if="blok.header_blocks" :key="blok.header_blocks[0]._uid" :blok="blok.header_blocks[0]" />
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    <NewsfeedRecent v-if="route.path !== '/news'" :siteConfig="siteConfig" />
  </div>
</template>

<script setup>
defineProps({ 
  blok: Object, 
  siteConfig: Object, 
})

const route = useRoute()
</script>