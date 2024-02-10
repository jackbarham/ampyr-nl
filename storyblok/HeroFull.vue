<template>
  <section v-editable="blok" class="hero-full">
    <div class="bg-brand-navy">
      <div class="absolute z-10 w-full">
        <div class="flex items-center h-screen w-full max-w-7xl m-auto p-6">
          <div class="text-white">
            <h2 class="text-6xl mb-6">{{ blok.heading }}</h2>
            <p class="mb-6 text-xl max-w-sm">{{ blok.text }}</p>
            <Button theme="light" :link="blok.button[0].link" :text="blok.button[0].label" />
            <div class="absolute right-0 top-0 h-full opacity-70 hidden lg:block">
              <svgo-curve-hero filled class="" />
            </div>
          </div>
        </div>
      </div>
      <img :src="blok.image" alt="#" class="object-cover w-full h-screen opacity-50">
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>