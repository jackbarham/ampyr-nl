<template>
  <section v-editable="blok" class="contact-form">
    <div :class="blok.theme === 'grey' ? 'bg-brand-grey' : 'bg-white'" class="py-14 lg:py-24">
      <div class="max-w-xl m-auto px-4 md:px-8">
        <h1 class="text-brand-navy text-center text-3xl md:text-4xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">{{ blok.heading }}</h1>
        <form class="">
          <FormInput type="text" name="fullname" label="Full name" />
          <FormInput type="email" name="email" label="Email address" />
          <FormInput type="text" name="comments" label="Addional comments" />
          
          <div class="flex justify-center pt-4">
            <Button theme="dark" link="#" text="Submit form" />
          </div>
        </form>
        <div class="flex justify-center">
          <div class="bg-brand-grey inline-block py-2 px-4 rounded mx-auto mt-12">
            <p class="text-brand-navy">NOTE: Contact form not yet working</p>
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
  },
})
</script>