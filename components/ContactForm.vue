<template>
  <div class="contact-form">
    <div :class="props.content.theme === 'grey' ? 'c-bg-grey' : 'bg-white'" class="py-14 lg:py-24">
      <div class="max-w-xl m-auto px-4 md:px-8">
        <h1 class="c-navy text-center text-3xl md:text-4xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">{{ props.content.heading }}</h1>
        <form class="">
          <FormInput type="text" name="fullname" label="Full name" />
          <FormInput type="email" name="email" label="Email address" />
          <FormInput type="text" name="comments" label="Addional comments" />
          <div class="flex justify-center pt-4">
            <Button theme="dark" link="#" text="Submit form" />
          </div>
        </form>
      </div>
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