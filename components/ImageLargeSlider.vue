<template>
  <div class="image-large-slider">
    <div class="bg-white">
      <div class="relative">
        
        <carousel ref="imageLargeSlider" :items-to-show="1" :wrap-around="true">
          <slide v-for="(slide, index) in slides" :key="index">
            
            <div class="relative h-[512px] md:h-[640px] lg:h-[768px] w-full">
              <div class="absolute z-20 w-full h-full">
                <div class="flex items-center h-full w-full max-w-6xl m-auto p-8">
                  <div class="max-w-md c-navy text-center md:text-left mx-auto md:mx-0">
                    <span class="block uppercase text-sm tracking-widest mb-6">{{ slide.headline }}</span>
                    <h2 class="text-4xl lg:text-5xl lg:leading-tight mb-10">{{ slide.heading }}</h2>
                    <p class="mb-10">{{ slide.text }}</p>
                  </div>
                </div>
              </div>
              <div class="hidden md:block absolute z-10 h-full w-full bg-gradient-to-r from-[#F5EFEC] opacity-80"></div>
              <img :src="slide.image" alt="Hero" class="absolute h-full w-full object-cover opacity-50 md:opacity-100">
            </div>
            
          </slide>
        </carousel>

        <div class="absolute w-full c-navy z-40 bottom-2 md:bottom-12">
          <div class="flex items-center justify-center md:justify-start h-full w-full max-w-6xl m-auto p-8">
            <div @click="prevSlide()" class="w-10 h-10 rounded-full p-0.5 c-bg-orange hover:bg-white transition-colors cursor-pointer rotate-180 mr-4">
              <svgo-arrow-right filled class="fill-p-navy" />
            </div>
            <div @click="nextSlide()" class="w-10 h-10 rounded-full p-0.5 c-bg-orange hover:bg-white transition-colors cursor-pointer">
              <svgo-arrow-right filled class="fill-p-navy" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    headline: 'Our environmental impact',
    heading: 'Biodiversity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    headline: 'Our environmental impact',
    heading: 'Water',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    headline: 'Our environmental impact',
    heading: 'Air',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
]

const imageLargeSlider = ref(null)

function nextSlide() {
  imageLargeSlider.value.next()
}

function prevSlide() {
  imageLargeSlider.value.prev()
}
</script>