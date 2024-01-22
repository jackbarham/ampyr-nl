<template>
  <HeroPage :content="heroPage" />
  <NewsfeedMain />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-light'
})

import ShapeHero1 from '~/assets/icons/shape-hero-1.svg'

const heroPage = {
  heading: 'News & Insights',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  variation: {
    type: 1,
    img1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img3: 'https://static.jackbarham.com/ampyr/hero.jpg',
    svg: ShapeHero1,
  },
}
</script>