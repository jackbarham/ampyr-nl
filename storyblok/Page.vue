<template>
  <div v-editable="blok">
    <StoryblokComponent v-if="blok.header_blocks" :key="blok.header_blocks[0]._uid" :blok="blok.header_blocks[0]" />
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    <!-- <StoryblokComponent :key="siteConfig.latest_articles[0]._uid" :blok="siteConfig.latest_articles[0]" /> -->
    <NewsfeedRecent />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>