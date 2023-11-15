<template>
  <div class="cards-large">
    <div class="bg-white">
      <div class="max-w-7xl m-auto px-4 md:px-8 py-14 lg:py-24">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="p-4 lg:p-6 c-bg-navy items-center lg:grid lg:grid-cols-2 lg:gap-4 rounded-2xl mb-4 lg:mb-12 last:mb-0"
        >
          <img :src="card.image" alt="Description" class="w-full h-48 md:h-72 lg:h-96 object-cover rounded-lg">
          <div class="max-w-lg m-auto pt-6 lg:pt-0 lg:px-12 text-center lg:text-left">
            <h2 class="text-white font-normal text-3xl mb-6">{{ card.heading }}</h2>
            <p class="text-white mb-8">{{ card.text }}</p>
            <Button theme="light" :link="card.link" text="Find out more" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const cards = [
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'For Landowners',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/landowners',
    },
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'For Municipalities',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/municipalities',
    },
  ]
</script>