<template>
  <div class="cards-location">
    <div class="c-bg-wheat py-14 lg:py-24">
      <div class="max-w-md lg:max-w-7xl m-auto px-4 md:px-8">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-16 m-auto">Our locations</h1>
        <div class="lg:grid lg:grid-cols-3 lg:gap-6">
          <div 
            v-for="(location, index) in locations" 
            :key="index" 
            class="block mb-6 last:mb-0 lg:mb-0 bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div class="relative">
              <img :src="location.image" alt="Description" class="w-full h-52 lg:h-60 object-cover">
            </div>
            <div class="relative p-6 pb-7 min-h-52 lg:min-h-60">
              <h2 class="c-navy text-xl tracking-wide mb-3">{{ location.country }}</h2>
              <ul class="c-navy font-light text-sm">
                <li class="mb-2">{{ location.address1 }}</li>
                <li class="mb-2">{{ location.address2 }}</li>
                <li class="mb-2">{{ location.address3 }}</li>
                <li class="mb-2">{{ location.phone }}</li>
                <li><a :href="`mailto:${location.email}`">{{ location.email }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const locations = [
    {
      country: 'Netherlands',
      address1: 'Address Line 1',
      address2: 'Address Line 2',
      address3: 'Address Line 3',
      phone: '+12 345 67890',
      email: 'netherlands@ampyr.com',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      country: 'Germany',
      address1: 'Address Line 1',
      address2: 'Address Line 2',
      address3: 'Address Line 3',
      phone: '+12 345 67890',
      email: 'germany@ampyr.com',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      country: 'United Kingdom',
      address1: 'Address Line 1',
      address2: 'Address Line 2',
      address3: 'Address Line 3',
      phone: '+12 345 67890',
      email: 'unitedkingdom@ampyr.com',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
  ]
</script>