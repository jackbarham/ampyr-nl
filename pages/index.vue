<template>
  <HeroFull />
  <CardsLarge />
  <CardsNumber />
  <ImageHalf />
  <ImageTextMiddle />
  <GridLong />
  <ImageLargeSlider />
  <CardsGrid />
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

onMounted(() => {
  setMenuClass('menu-light')
})
</script>