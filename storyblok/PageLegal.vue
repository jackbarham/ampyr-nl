<template>
  <div v-editable="blok">
    <HeroShort :content="blok.page_hero_content[0]" />
    <article class="max-w-3xl mx-auto py-12 md:py-28 px-4">
      <div class="prose prose-sm md:prose-base text-brand-navy" v-html="renderRichText(blok.article)"></div>
    </article>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>