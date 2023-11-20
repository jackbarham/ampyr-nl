<template>
  <HeroPage :content="hero" />
  <CardsLarge :content="cardsLarge" />
  <VideoFull />
  <FeaturedSlider />
  <ImageTextLeft :content="imageTextLeft" />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()
import HeroSvg1 from '~/assets/icons/hero-svg-1.svg'

const hero = {
  heading: 'At a Glance',
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

const cardsLarge = {
  cards: [
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'For Landowners',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/landowners',
    },
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'For Municipalities',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/municipalities',
    },
  ]
}

const imageTextLeft = {
  heading: 'Our Commitment To Sustainability',
  text: 'We develop land for ground-mounted PV installations in a holistic way, taking into account the needs of each particular region to ensure sustainable power generation. For local communities and regions, we strive to help accelerate their journey to zero-carbon.',
  buttonText: 'Find out more',
  buttonLink: 'sustainability',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>