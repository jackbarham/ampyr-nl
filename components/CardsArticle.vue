<template>
  <div class="cards-article">
    <div class="relative">
      <div class="absolute h-4 lg:h-8 -top-4 lg:-top-8 left-0 w-full c-bg-navy z-50" style="clip-path: ellipse(50% 100% at 50% 100%);"></div>
      <!-- <div class="curved-top c-bg-navy"></div> -->
      <div class="c-bg-navy py-8 lg:pb-24 lg:pt-20">
        <div class="max-w-xl lg:max-w-7xl m-auto px-4 md:px-8">
          <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Latest from us...</h1>
          <div class="lg:grid lg:grid-cols-3 lg:gap-6 mb-12 lg:mb-20">
            <a 
              v-for="(card, index) in cards" 
              :key="index" 
              class="block mb-6 lg:mb-0 bg-white hover:c-bg-navy-dark scale-1 lg:hover:scale-[103%] rounded-2xl overflow-hidden group transition-all"
              :href="card.link"
            >
              <div class="relative">
                <span class="bg-white c-navy text-xs px-3 py-1 rounded-full absolute z-10 right-4 top-4 capitalize">{{ card.category }}</span>
                <img :src="card.image" alt="Description" class="w-full h-52 lg:h-60 object-cover">
              </div>
              <div class="relative p-6 h-52 lg:h-60">
                <h2 class="c-navy group-hover:text-white text-xl tracking-wide">{{ card.heading }}</h2>
                <div class="absolute bottom-6 left-6 w-10 h-10 border border-orange rounded-full p-0.5 bg-transparent group-hover:c-bg-orange">
                  <svgo-arrow-right filled class="fill-p-navy" />
                </div>
              </div>
            </a>
          </div>
          <div class="flex justify-center">
            <Button theme="light" link="#" text="Read more articles" />
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const cards = [
    {
      heading: 'AMPYR Solar Europe And Asahi Europe & International Sign PPA For Dutch Drinks Production',
      link: '#',
      category: 'Press release',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      heading: 'Echt-Susteren & Venray — Construction Update',
      link: '#',
      category: 'Press release',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      heading: 'AMPYR Solar Europe secures €200M Project Finance Facility from Rabobank',
      link: '#',
      category: 'Press release',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
  ]
</script>