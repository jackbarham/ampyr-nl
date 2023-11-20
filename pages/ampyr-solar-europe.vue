<template>
  <HeroPage :content="hero" />
  <ImageHalf :content="caseStudy" />
  <Numbers />
  <CardsLarge :content="cardsLarge" />
  <FeaturedSlider />
  <ImageTextLeft :content="imageTextLeft" />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()
import HeroSvg1 from '~/assets/icons/hero-svg-1.svg'

const hero = {
  heading: 'About AMPYR Solar Europe',
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

const caseStudy = {
  heading: 'Introduction of who we are',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  theme: 'white',
  button: {
    text: 'Button not linked',
    link: '#',
  }
}

const cardsLarge = {
  cards: [
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'Vision & Strategy',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '#',
    },
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'Sustainability',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'sustainability',
    },
  ]
}

const imageTextLeft = {
  heading: 'Leadership',
  text: 'Add some brief information about the leadership team here. Recommended max characters: 260',
  buttonText: 'Meet the team',
  buttonLink: 'leadership-team',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>