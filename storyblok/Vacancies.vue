<template>
  <section v-editable="blok" class="vacancies">
    <div class="bg-brand-navy layout-p-normal">
      <div class="max-w-lg md:max-w-6xl layout-w-normal">
        <Heading text="light" copy="Our Vacancies" />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="(card, index) in blok.vacancies_item" 
            :key="index" 
            class="relative block bg-brand-navy-dark p-6 rounded-lg min-h-[192px] scale-1 hover:scale-[103%] transition-all shadow-lg"
            to="/careers/head-of-finance"
          >
            <h2 class="text-brand-nl text-xl font-normal tracking-wide mb-2">{{ card.title }}</h2>
            <p class="c-wheat text-sm font-light">{{ card.text }}</p>
            <div class="absolute bottom-6 left-6">
              <div class="flex items-center text-brand-nl tracking-wide font-neworder text-sm md:text-base">
                <span>Read the job description</span>
                <span class="inline-block w-4 h-4 ml-2">
                  <svgo-chevron-right filled class="fill-ps-nl" />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <NotDynamic />

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