<template>
  <HeroShort :content="hero" />
  <TempLegalCopy />
</template>

<script setup>
const hero = {
  heading: 'Terms & Conditions',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg'
}
</script>