<template>
  <div class="hero-full">
    <div class="bg-brand-navy">
      <div class="absolute z-10 w-full">
        <div class="flex items-center h-screen w-full max-w-6xl m-auto p-6">
          <div class="">
            <h2 class="text-6xl mb-6">{{ props.content.heading }}</h2>
            <p class="mb-6 text-xl max-w-sm">{{ props.content.text }}</p>
            <Button theme="light" link="#" text="Button not linked" />
          </div>
        </div>
      </div>
      <img src="https://static.jackbarham.com/ampyr/hero.jpg" alt="Hero" class="object-cover w-full h-screen opacity-50">
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