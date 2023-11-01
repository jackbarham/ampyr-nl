<template>
  <div class="cards-large">
    <div class="bg-white">
      <div class="max-w-6xl m-auto p-4 lg:px-8 pb-0 lg:pt-20 lg:pb-8">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="p-6 lg:p-12 c-bg-navy lg:grid lg:grid-cols-2 lg:gap-4 rounded-2xl mb-4 lg:mb-12 items-center"
        >
          <img :src="card.image" alt="Description" class="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg">
          <div class="max-w-lg m-auto pt-6 lg:pt-0 lg:px-12 text-center lg:text-left">
            <h2 class="text-white text-3xl mb-6">{{ card.heading }}</h2>
            <p class="text-white mb-8">{{ card.text }}</p>
            <Button />
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
    },
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'For Municipalities',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]
</script>