<template>
  <HeroShort :content="hero" />
  <div class="max-w-3xl mx-auto py-12 md:py-28 px-4">
    <div class="prose-sm md:prose-base c-navy">
      <h1>Sitemap details here?</h1>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script setup>
const { setMenuClass } = useMenuClass()

const hero = {
  heading: 'Sitemap',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg'
}

onMounted(() => {
  setMenuClass('menu-light')
})
</script>