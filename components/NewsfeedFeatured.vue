<template>
  <NuxtLink 
    class="inline-block lg:grid lg:grid-cols-2 bg-white scale-1 lg:hover:scale-[101%] rounded-2xl overflow-hidden group transition-all shadow-lg"
    :to="featured.link"
  >
    <div class="relative lg:order-2">
      <span class="bg-white text-brand-navy text-xs px-3 py-1 rounded-full absolute z-10 right-4 top-4 capitalize">{{ featured.category }}</span>
      <img :src="featured.image" loading="lazy" alt="Description" class="w-full h-full object-cover">
      <!-- <NuxtImg 
        width="300"
        height="300"
        loading="lazy"
        :src="featured.image" 
        :alt="featured.heading" 
        class="w-full h-full object-cover" 
      /> -->
    </div>
    <div class="relative pt-6 pl-6 pr-10 pb-24 md:pb-36 bg-white group-hover:bg-brand-navy-dark text-brand-navy lg:order-1">
      <p class="text-sm mb-6 group-hover:text-white opacity-70">{{ featured.date }}</p>
      <h2 class="group-hover:text-white text-2xl md:text-4xl leading-tight mb-8">{{ featured.heading }}</h2>
      <p class="group-hover:text-white">{{ featured.intro }}</p>
      <div class="absolute bottom-6 left-6 w-10 h-10 border border-brand-nl rounded-full p-0.5 bg-transparent group-hover:bg-brand-nl">
        <svgo-arrow-right filled class="fill-ps-navy" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const featured = {
  date: '14th June 2023',
  heading: 'AMPYR Solar Europe and Multiplex Sign PPA for Solar Power Station in Norfolk',
  intro: 'Lorem ipsum dolor sit amet consectetur. Faucibus mauris volutpat nam mauris sit lorem vulputate. Faucibus lorem leo vel sagittis euismod varius aliquam duis sagittis.',
  link: 'press/demo-press-release-content',
  category: 'Press release',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
}
</script>