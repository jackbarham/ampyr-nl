<template>
  <div class="cards-text">

    <div class="bg-white py-8 lg:py-16">
      <div class="max-w-xl lg:max-w-7xl m-auto px-4">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Our Commitment to Achieving Net Zero</h1>
        <div class="lg:grid lg:grid-cols-3 lg:gap-6">
          <div 
            v-for="(card, index) in cards" 
            :key="index" 
            class="block mb-6 lg:mb-0 p-6 lg:p-8 c-bg-wheat rounded-lg lg:min-h-[360px]"
          >
            <div class="h-8 w-8 mb-4">
              <svgo-globe />
            </div>
            <h2 class="c-navy text-2xl tracking-wide mb-4">{{ card.heading }}</h2>
            <p class="c-navy font-light">{{ card.text }}</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>

</template>

<script setup>
  const cards = [
    {
      heading: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icons: '',
    },
    {
      heading: 'Ac odio tempor orci',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icons: '',
    },
    {
      heading: 'Bibendum neque',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icons: '',
    },
  ]
</script>