<template>
  <HeroPage :content="heroPage" />
  <ImageFullCurve />
  <GridText />
  <GridLong :content="gridLong" />
  <ImageHalf :content="caseStudy" />
  <VideoFull />
  <ImageTextMiddle :content="imageTextMiddle" />
  <Testimonial />
  <CardsArticle />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-light'
})

import ShapeHero1 from '~/assets/icons/shape-hero-1.svg'

const heroPage = {
  heading: 'Landowners',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  variation: {
    type: 1,
    img1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img3: 'https://static.jackbarham.com/ampyr/hero.jpg',
    svg: ShapeHero1,
  },
}

const gridLong = {
  items: [
    {
      heading: 'Placeholder heading',
      text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. ',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      heading: 'Placeholder heading',
      text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. ',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
  ]
}

const caseStudy = {
  category: 'Category name',
  heading: 'Case Study Name',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  button: {
    text: 'Read the case study',
    link: '/portfolio/case-study-name',
  }
}

const imageTextMiddle = {
  text: 'Capturing solar energy is tapping into nature\'s limitless source, empowering a sustainable future while preserving our planet.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Image description',
  button: {
    text: 'Button not linked',
    link: '#',
  }
}
</script>