<template>
  <HeroShort :content="hero" />
  <TempPressReleaseCopy />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

const hero = {
  heading: 'Press Release',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg'
}

onMounted(() => {
  setMenuClass('menu-light')
})
</script>√