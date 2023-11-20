<template>
  <HeroPage :content="hero" />
  <PeopleGrid />
  <ImageTextMiddle :content="imageTextMiddle" />
  <ImageTextLeft :content="imageTextLeft" />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()
import HeroSvg1 from '~/assets/icons/hero-svg-1.svg'

const hero = {
  heading: 'Leadership',
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

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>