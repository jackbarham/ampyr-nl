<template>
  <section v-editable="blok" class="grid-long">
    <div class="bg-white layout-p-normal">
      <div class="max-w-md lg:max-w-5xl layout-w-normal">
        <Heading v-if="blok.heading" text="dark" :copy="blok.heading" />
        <div 
            v-for="(item, index) in blok.blocks" 
            :key="index"
            class="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-24 items-center mb-12 last:mb-0"
          >
            <img :src="item.image" alt="Description" class="w-full" :class="{ 'lg:order-last': index % 2 === 0 }" />
            <div class="text-center lg:text-left text-brand-navy" :class="{ 'lg:order-first': index % 2 === 0 }">
              <h2 class="text-2xl lg:text-3xl mb-4">{{ item.title }}</h2>
              <p>{{ item.text }}</p>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  }
})
</script>
