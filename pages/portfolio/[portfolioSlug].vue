<template>
  <ImageHalf :content="hero" />
  <TempCaseStudyCopy />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-dark'
})

const hero = {
  category: 'Category name',
  heading: 'Case Study Name',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
}
</script>√