<template>
  <HeroFull />
  <CardsLarge />
  <CardsNumber />
  <ImageHalf :content="caseStudy" />
  <ContactForm />
  <ImageTextMiddle />
  <GridLong />
  <ImageLargeSlider />
  <CardsGrid />
  <VideoFull />
  <FeaturedSlider />
  <Testimonial />
  <ImageFullCurve />
  <GridFeed />
  <Statistics />
  <CardsIcon />
  <GridText />
  <PeopleGrid />
  <CardsLocation />
  <PeopleSlider />
  <ImageTextLeft />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

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

onMounted(() => {
  setMenuClass('menu-light')
})
</script>