<template>
  <div v-editable="blok">
    <!-- <StoryblokComponent v-if="blok.header_blocks" :key="blok.header_blocks[0]._uid" :blok="blok.header_blocks[0]" /> -->
    <div class="temp-legal-copy">
      <div class="max-w-3xl mx-auto py-12 md:py-28 px-4">
        <div class="prose prose-base text-brand-navy">
          <p>{{ blok.something }}</p>
          <p>{{ blok.headline }}</p>
        </div>
      </div>
    </div>
    <!-- <StoryblokComponent :key="siteConfig.latest_articles[0]._uid" :blok="siteConfig.latest_articles[0]" /> -->
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>