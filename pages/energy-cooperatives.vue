<template>
  <HeroPage :content="heroPage" />
  <ImageTextMiddle :content="imageTextMiddle" />
  <Testimonial />
  <Numbers />
  <PeopleSlider />
  <ContactForm :content="contactForm" />
  <CardsArticle />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-light'
})

import ShapeHero1 from '~/assets/icons/shape-hero-1.svg'

const heroPage = {
  heading: 'Energy Cooperatives',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  variation: {
    type: 3,
    img1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img3: 'https://static.jackbarham.com/ampyr/hero.jpg',
    svg: ShapeHero1,
  },
}


const imageTextMiddle = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Image description',
}

const contactForm = {
  heading: 'If you wish to contact us, please fill in the form below.',
  theme: 'grey',
}
</script>