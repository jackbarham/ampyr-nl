<template>
  <section v-editable="blok" class="locations">
    <div class="bg-brand-wheat layout-p-normal">
      <div class="max-w-md lg:max-w-7xl layout-w-normal">
        <Heading text="dark" :copy="blok.heading" />
        <div class="lg:grid lg:grid-cols-3 lg:gap-6">
          <div 
            v-for="(location, index) in blok.location_items" 
            :key="index" 
            class="mb-6 last:mb-0 lg:mb-0 bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div class="relative">
              <img :src="location.image" alt="Description" class="w-full h-52 lg:h-60 object-cover">
            </div>
            <div class="relative p-6 pb-7 min-h-52 lg:min-h-60">
              <h2 class="text-brand-navy text-2xl tracking-wide mb-3">{{ location.country }}</h2>
              <ul class="text-brand-navy text-sm">
                <li class="mb-2">{{ location.address1 }}</li>
                <li class="mb-2">{{ location.address2 }}</li>
                <li class="mb-2">{{ location.address3 }}</li>
                <li class="mb-2">{{ location.phone }}</li>
                <li><a class="hover:underline" :href="`mailto:${location.email}`">{{ location.email }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  }
})
</script>