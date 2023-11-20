<template>
  <HeroPage :content="hero" />
  <ContactForm :content="contactForm" />
  <CardsLocation />
</template>

<script setup>
const { setMenuClass } = useMenuClass()
import HeroSvg1 from '~/assets/icons/hero-svg-1.svg'

const hero = {
  heading: 'Get in Touch',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonText: 'Button not linked',
  buttonLink: '#',
  shapes: {
    type: 1,
    img1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img3: 'https://static.jackbarham.com/ampyr/hero.jpg',
    svg: HeroSvg1,
  },
}

const contactForm = {
  heading: 'If you wish to contact us, please fill in the form below.',
  theme: 'white',
}

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>