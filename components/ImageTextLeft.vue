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
          class="start-scale-in absolute h-full w-full object-cover opacity-80" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('start-scale-in')) {
          entry.target.classList.add('animate-scale-in');
        }
        if (entry.target.classList.contains('start-fade-in')) {
          entry.target.classList.add('animate-fade-in');
        }
      }
    });
  }, {
    threshold: 0.4
  });

  // Observe elements for scaling in
  const elementsToScale = document.querySelectorAll('.start-scale-in');
  elementsToScale.forEach(el => observer.observe(el));

  // Observe elements for fading in
  const elementsToFade = document.querySelectorAll('.start-fade-in');
  elementsToFade.forEach(el => observer.observe(el));
});
</script>

<style scoped>
.animate-scale-in {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: animate-scale-in;
}

@keyframes animate-scale-in {
  0% {
    opacity: 0;
    transform: scale(0.64);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.start-scale-in {
  opacity: 0;
}

.animate-fade-in {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: animate-fade-in;
}

@keyframes animate-fade-in {
  0% {
    opacity: 0.1;
  }

  100% {
    opacity: 1;
  }
}

.start-fade-in {
  opacity: 0.1;
}
</style>