<template>
  <HeroShort :content="hero" />
  <TempPressReleaseCopy />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-dark'
})

const hero = {
  heading: 'Press Release',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg'
}
</script>√