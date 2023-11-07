<template>
  <div class="image-half relative">
    <div class="c-bg-grey">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center">
        <div class="relative overflow-hidden">
          <img :src="content.image" alt="Description" class="w-full h-[512px] md:h-[640px] lg:h-[768px] object-cover">
          <svg class="svg-curve-down-bottom block md:hidden fill-f-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" preserveAspectRatio="none">
            <path fill="none" d="M0,0 Q50,48 100,0 V24 H0 Z" />
          </svg>
          <svg class="svg-curve-down-right hidden md:block fill-f-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 100" preserveAspectRatio="none">
            <path fill="none" d="M0,0 Q48,50 0,100 V100 H24 V0 Z" />
          </svg>
        </div>
        <div class="max-w-xl mx-auto md:mx-0 py-14 px-8 lg:px-20 text-center md:text-left c-navy">
          <h2 class="text-3xl lg:text-5xl mb-6 lg:mb-8">{{ content.heading }}</h2>
          <p class=" lg:text-xl mb-8">{{ content.text }}</p>
          <Button theme="dark" link="#" text="Read case study" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const content = {
    heading: 'Case Study Name',
    text: 'Add a brief description of your chosen case study here. Recommended max characters: 200',
    buttonText: 'Read the case study',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  }
</script>