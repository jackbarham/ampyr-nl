<template>
  <div class="grid-text">
    <div class="c-bg-navy py-14 lg:py-24">
      <div class="max-w-md lg:max-w-5xl m-auto px-4">
        <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">The Benefits</h1>
        <div class="lg:grid lg:grid-cols-3 lg:gap-28 text-center">
          <div 
            v-for="(item, index) in items" 
            :key="index" 
            class="start-fade-scale mb-12 last:mb-0 lg:mb-0 px-4 lg:px-0"
          >
            <div class="h-10 w-10 mb-4 mx-auto">
              <component :is="item.icon" filled class="fill-p-orange" />
            </div>
            <h2 class="c-orange text-2xl lg:text-4xl font-normal tracking-wide mb-6">{{ item.heading }}</h2>
            <p class="c-wheat font-light">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <svgo-test2 filled class="start-reveal-right hidden lg:block pt-20 opacity-80" />
    </div>
  </div>
</template>

<script setup>
import IconWorld from '~/assets/icons/world.svg'
import IconLeaf from '~/assets/icons/leaf.svg'
import IconheartHandshake from '~/assets/icons/heart-handshake.svg'

const items = [
  {
    icon: IconWorld,
    heading: 'Benefit One',
    text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
  },
  {
    icon: IconLeaf,
    heading: 'Benefit Two',
    text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
  },
  {
    icon: IconheartHandshake,
    heading: 'Benefit Three',
    text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add class to all .start-show-right elements
        entry.target.querySelector('.start-reveal-right').classList.add('amimate-reveal-right')

        // Add class to the first matching .start-fade-scale element
        const fadeScaleElement = entry.target.querySelectorAll('.start-fade-scale')
        fadeScaleElement.forEach(el => el.classList.add('animate-fade-scale'))
      }
    });
  }, {
    threshold: 0.6
  })

  const elementsToAnimate = document.querySelectorAll('.grid-text')
  elementsToAnimate.forEach(el => observer.observe(el))
})
</script>