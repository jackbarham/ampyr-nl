<template>
  <HeroPage :content="hero" />
  <ImageTextMiddle :content="imageTextMiddle" />
  <Numbers />
  <FeaturedSlider />
  <Testimonial />
  <ImageTextLeft :content="sustainability" />
  <ImageTextLeft :content="powerDistribution" />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()
import HeroSvg1 from '~/assets/icons/hero-svg-1.svg'

const hero = {
  heading: 'Power Distribution',
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

const sustainability = {
  heading: 'Our Commitment To Sustainability',
  text: 'We develop land for ground-mounted PV installations in a holistic way, taking into account the needs of each particular region to ensure sustainable power generation. For local communities and regions, we strive to help accelerate their journey to zero-carbon.',
  buttonText: 'Find out more',
  buttonLink: 'sustainability',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}

const powerDistribution = {
  heading: 'Ground-based Solar Solutions',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  buttonText: 'Find out more',
  buttonLink: 'ground-based-solar-generation',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>