<template>
  <HeroPage :content="hero" />
</template>

<script setup>
import HeroShape1 from '~/assets/icons/hero-shape-1.svg'

const hero = {
  heading: 'Audience focused messaging here',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonText: 'Button text',
  buttonLink: '#',
  image: {
    shape1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    shape2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    shape3: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  svg: HeroShape1,
}
</script>