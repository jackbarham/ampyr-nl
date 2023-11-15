<template>
  <div class="cards-grid">

    <div class="c-bg-navy py-14 lg:py-24">
      <div class="max-w-lg md:max-w-6xl m-auto px-4 md:px-8">
        <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Our Vacancies</h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="(card, index) in cards" 
            :key="index" 
            class="relative block c-bg-navy-dark p-6 rounded-lg min-h-[192px] scale-1 hover:scale-[103%] transition-all shadow-lg"
            :to="card.link"
          >
            <h2 class="c-orange text-xl font-normal tracking-wide mb-2">{{ card.heading }}</h2>
            <p class="c-wheat text-sm font-light">{{ card.text }}</p>
            <div class="absolute bottom-6 left-6">
              <div class="flex items-center c-orange tracking-wide font-no text-sm md:text-base">
                <span>Read the job description</span>
                <span class="inline-block w-4 h-4 ml-2">
                  <svgo-chevron-right filled />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
  const cards = [
    {
      heading: 'Head of Finance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link: '/careers/head-of-finance',
    },
    {
      heading: 'Head of Finance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link: '/careers/head-of-finance',
    },
    {
      heading: 'Head of Finance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link: '/careers/head-of-finance',
    },
    {
      heading: 'Head of Finance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link: '/careers/head-of-finance',
    },
    {
      heading: 'Head of Finance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link: '/careers/head-of-finance',
    },
    {
      heading: 'Head of Finance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link: '/careers/head-of-finance',
    },
  ]
</script>