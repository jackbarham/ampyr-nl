<template>
  <HeroShort :content="hero" />
  <article class="max-w-3xl mx-auto py-12 md:py-28 px-4">
    <HeadingArtcile :title="blok.title" />
    <div class="prose prose-sm md:prose-base text-brand-navy" v-html="renderRichText(blok.description)"></div>
  </article>
</template>

<script setup>
defineProps({ blok: Object })

const hero = {
  category: 'Careers',
  image: {
    filename: 'https://a.storyblok.com/f/273348/3992x2992/96180a1989/careers-default-hero-image.jpg'
  }
}
</script>