<template>
  <HeroPage :content="heroPage" />
  <PeopleGrid />
  <ImageTextMiddle :content="imageTextMiddle" />
  <ImageTextLeft :content="imageTextLeft" />
  <CardsArticle />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-light'
})

import ShapeHero1 from '~/assets/icons/shape-hero-1.svg'

const heroPage = {
  heading: 'Leadership',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  variation: {
    type: 1,
    img1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img3: 'https://static.jackbarham.com/ampyr/hero.jpg',
    svg: ShapeHero1,
  },
}

const imageTextMiddle = {
  text: 'Contact Us information here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Image description',
  button: {
    text: 'Get in touch',
    link: 'contact',
  }
}

const imageTextLeft = {
  brow: 'Our vision',
  heading: 'A leading independent solar power producer, empower every partner through holistic and sustainable solutions',
  buttonText: 'Find out more',
  buttonLink: 'vision-strategy',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}
</script>