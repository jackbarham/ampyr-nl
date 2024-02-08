<template>
  <HeroSimple title="Careers" />
  <article class="max-w-3xl mx-auto py-12 md:py-28 px-4">
    <h1 class="text-3xl lg:text-5xl font-medium text-brand-navy-dark mb-8 lg:mb-10">{{ blok.title }}</h1>
    <div class="prose prose-sm md:prose-base text-brand-navy" v-html="renderRichText(blok.description)"></div>
  </article>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  }
})
</script>