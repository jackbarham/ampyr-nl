<template>
  <div class="grid-text">
    <div class="bg-white py-12 lg:py-24">
      <div class="max-w-md lg:max-w-5xl m-auto px-8">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-8 lg:mb-20 max-w-md lg:max-w-full m-auto">Our values</h1>
        <div class="">
          <div 
            v-for="(item, index) in items" 
            :key="index"
            class="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-24 items-center mb-12 last:mb-0"
          >
            <img :src="item.image" alt="Description" class="w-full" :class="{ 'lg:order-last': index % 2 === 0 }" />
            <div class="text-center lg:text-left c-navy" :class="{ 'lg:order-first': index % 2 === 0 }">
              <h2 class="text-2xl lg:text-3xl mb-4">{{ item.heading }}</h2>
              <p class="font-light">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const items = [
    {
      heading: 'We are sustainable together',
      text: 'Together, we achieve sustainable success by dedicating ourselves to clean energy, emissions reduction, power resilience, and community-centred solar solutions.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-1.png',
    },
    {
      heading: 'We are positively holistic',
      text: 'We provide unique, end-to-end solar solutions integrating development, management, and optimisation, offering a seamless experience, understanding global responsibilities.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-2.png',
    },
    {
      heading: 'We put people first',
      text: 'We prioritise strong ties with landowners, municipalities, and customers, putting their needs first, knowing community trust is vital for mission success.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-3.png',
    },
    {
      heading: 'We are ever reliable',
      text: 'We consistently fulfil promises to colleagues, partners, and communities, building trust and enduring partnerships through open communication and unwavering honesty.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-4.png',
    },
    {
      heading: 'We bring expertise',
      text: 'Our extensive history in renewables and supply network enables us to offer unmatched industry knowledge, tools, and experience, elevating ambition and value for all partners.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-5.png',
    },
  ]
</script>