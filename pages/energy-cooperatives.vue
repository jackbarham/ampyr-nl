<template>
  <HeroPage :content="hero" />
  <ImageTextMiddle :content="imageTextMiddle" />
  <Testimonial />
  <Numbers />
  <PeopleSlider />
  <ContactForm :content="contactForm" />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()
import HeroSvg1 from '~/assets/icons/hero-svg-1.svg'

const hero = {
  heading: 'Energy Cooperatives',
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

const imageTextMiddle = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Image description',
}

const contactForm = {
  heading: 'If you wish to contact us, please fill in the form below.',
  theme: 'grey',
}

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>