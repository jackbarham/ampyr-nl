<template>
  <HeroShort :content="hero" />
  <TempCareers />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-dark'
})

const hero = {
  heading: 'Careers',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg'
}
</script>