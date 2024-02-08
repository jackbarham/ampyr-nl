<template>
  <div v-editable="blok">
    <HeroShort :content="blok.page_hero_content[0]" />
    <article class="temp-legal-copy">
      <div class="max-w-3xl mx-auto py-12 md:py-28 px-4">
        <div class="prose prose-sm md:prose-base text-brand-navy" v-html="renderRichText(blok.article)">
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-dark'
})

defineProps({
  blok: {
    type: Object,
    required: true,
  }
})
</script>