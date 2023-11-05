<template>
  <div class="benefits">
    <div class="c-bg-navy py-8 lg:py-20">
      <div class="max-w-5xl m-auto px-4">
        <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">The Benefits</h1>
        <div class="lg:grid lg:grid-cols-3 lg:gap-28 text-center">
          <div 
            v-for="(item, index) in items" 
            :key="index" 
            class="mb-12 lg:mb-0"
          >
            <div class="h-10 w-10 mb-4 mx-auto">
              <svgo-globe filled class="c-fill-orange" />
            </div>
            <h2 class="c-orange text-2xl lg:text-4xl tracking-wide mb-6">{{ item.heading }}</h2>
            <p class="c-wheat font-light">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <svgo-test2 class="hidden lg:block pt-20 opacity-60" />
    </div>
  </div>
</template>

<script setup>
  const items = [
    {
      icon: '',
      heading: 'Benefit One',
      text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
    },
    {
      icon: '',
      heading: 'Benefit Two',
      text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
    },
    {
      icon: '',
      heading: 'Benefit Three',
      text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
    },
  ]
</script>