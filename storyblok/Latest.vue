<template>
  <section v-editable="blok" class="newsfeed-recent">
    <div class="relative">
      <svg class="svg-curve-up-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" preserveAspectRatio="none">
        <path fill="#181f49" d="M0,24 Q50,0 100,24 V24 H0 Z" />
      </svg>
      <div class="bg-brand-navy py-14 lg:pb-24 lg:pt-20">
        <div class="max-w-xl lg:max-w-7xl layout-w-normal">
          <Heading text="light" :copy="blok.copy" />
          <div class="grid lg:grid-cols-3 gap-8 mb-12 lg:mb-20">
            <NewsfeedCard v-for="(card, index) in blok.articles" :key="index" :card="card" />
          </div>
          <div class="flex justify-center">
            <Button theme="light" :data="blok.button[0].link" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

// const cards = [
// {
//     date: '14th June 2023',
//     heading: 'AMPYR Solar Europe and Multiplex Sign PPA for Solar Power Station in Norfolk',
//     link: 'press/demo-press-release-content',
//     category: 'Press release',
//     image: 'https://static.jackbarham.com/ampyr/hero.jpg',
//   },
//   {
//     date: '14th June 2023',
//     heading: 'AMPYR Solar Europe And Asahi Europe & International Sign PPA For Dutch Drinks Production',
//     link: 'press/demo-press-release-content',
//     category: 'Article',
//     image: 'https://static.jackbarham.com/ampyr/hero.jpg',
//   },
//   {
//     date: '14th June 2023',
//     heading: 'AMPYR Solar Europe Acquires 390 MW UK Solar PV Portfolio From Tyler Hill',
//     link: 'press/demo-press-release-content',
//     category: 'Blog',
//     image: 'https://static.jackbarham.com/ampyr/hero.jpg',
//   },
// ]
</script>