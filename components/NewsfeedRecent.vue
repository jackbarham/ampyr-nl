<template>
  <section class="newsfeed-recent">
    <div class="relative">
      <svg class="svg-curve-up-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" preserveAspectRatio="none">
        <path fill="#181f49" d="M0,24 Q50,0 100,24 V24 H0 Z" />
      </svg>
      <div class="bg-brand-navy py-14 lg:pb-24 lg:pt-20">
        <div class="max-w-xl lg:max-w-7xl layout-w-normal">
          <Heading text="light" copy="Latest from us..." />
          <div class="grid lg:grid-cols-3 gap-8 mb-12 lg:mb-20">
            <NewsfeedCardOld v-for="(card, index) in cards" :key="index" :card="card" />
          </div>
          <div class="flex justify-center">
            <Button theme="light" link="news" text="Read more updates" />
          </div>
          <NotDynamic />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const cards = [
  {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe and Multiplex Sign PPA for Solar Power Station in Norfolk',
      link: 'news/demo-press-release-content',
      category: 'Press release',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe And Asahi Europe & International Sign PPA For Dutch Drinks Production',
      link: 'news/demo-press-release-content',
      category: 'Article',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      date: '14th June 2023',
      heading: 'AMPYR Solar Europe Acquires 390 MW UK Solar PV Portfolio From Tyler Hill',
      link: 'news/demo-press-release-content',
      category: 'Blog',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
  ]
</script>