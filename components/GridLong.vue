<template>
  <div class="grid-long">
    <div class="bg-white layout-p-normal">
      <div class="max-w-md lg:max-w-5xl layout-w-normal">
        <Heading v-if="props.content.heading" text="dark" :copy="props.content.heading" />
        <div 
            v-for="(item, index) in props.content.items" 
            :key="index"
            class="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-24 items-center mb-12 last:mb-0"
          >
            <img :src="item.image" alt="Description" class="w-full" :class="{ 'lg:order-last': index % 2 === 0 }" />
            <div class="text-center lg:text-left text-brand-navy" :class="{ 'lg:order-first': index % 2 === 0 }">
              <h2 class="text-2xl lg:text-3xl mb-4">{{ item.heading }}</h2>
              <p class="font-light">{{ item.text }}</p>
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