<template>
  <div class="p-4 pb-0">
    
    <div 
      v-for="(card, index) in cards" 
      :key="index" 
      class="p-6 c-bg-navy lg:grid lg:grid-cols-2 lg:gap-4 rounded-2xl mb-4 lg:mb-0"
    >
      <img :src="card.image" alt="Description" class="w-full h-48 lg:h-64 object-cover rounded-lg">
      <div class="pt-6 text-center">
        <h2 class="text-white text-3xl mb-6">{{ card.heading }}</h2>
        <p class="text-white mb-8">{{ card.text }}</p>
        <Button />
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