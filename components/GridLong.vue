<template>
  <div class="grid-text">
    <div class="bg-white py-14 lg:py-24">
      <div class="max-w-md lg:max-w-5xl m-auto px-8">
        <h1 v-if="props.content.heading" class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-8 lg:mb-20 max-w-md lg:max-w-full m-auto">{{ props.content.heading }}</h1>
        <div class="">
          <div 
            v-for="(item, index) in props.content.items" 
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
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>