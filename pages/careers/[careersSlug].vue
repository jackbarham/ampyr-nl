<template>
  <HeroShort :content="hero" />
  <TempCareers />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

const hero = {
  heading: 'Careers',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg'
}

onMounted(() => {
  setMenuClass('menu-light')
})
</script>√