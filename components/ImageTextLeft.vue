<template>
  <div class="image-text-left">
    <div class="bg-white">
      <div class="relative h-[512px] lg:h-[768px] w-full">

        <div class="start-fade-in absolute z-20 w-full h-full">
          <div class="flex items-center h-full w-full max-w-6xl m-auto p-6">
            <div class="max-w-md c-navy">
              <h2 class="text-4xl lg:text-5xl lg:leading-tight mb-10">Our Commitment To Sustainability</h2>
              <p class="mb-10">We develop land for ground-mounted PV installations in a holistic way, taking into account the needs of each particular region to ensure sustainable power generation. For local communities and regions, we strive to help accelerate their journey to zero-carbon.</p>
              <Button theme="dark" link="#" text="Button not linked" />
            </div>
          </div>
        </div>
        
        <div class="absolute h-full w-full z-10 bg-gradient-to-r from-[#F5EFEC] to-transparent opacity-90"></div>
        <img 
          src="https://static.jackbarham.com/ampyr/hero.jpg" 
          alt="Hero" 
          class="start-scale-out absolute h-full w-full object-cover opacity-80" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
useAnimation({
  trigger: 'image-text-left',
  classes: [
    { start: 'start-scale-out', animate: 'animate-scale-out' },
    { start: 'start-fade-in', animate: 'animate-fade-in' },
  ],
  threshold: 0.6
})
</script>

