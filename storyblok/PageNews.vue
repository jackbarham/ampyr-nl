<template>
  <div v-editable="blok">
    <HeroShort :content="blok" />
    <article class="max-w-3xl mx-auto py-12 md:py-28 px-4">
      <HeadingArtcile :title="blok.title" />
      <div class="prose prose-sm md:prose-base text-brand-navy" v-html="renderRichText(blok.article)"></div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  }
})
</script>