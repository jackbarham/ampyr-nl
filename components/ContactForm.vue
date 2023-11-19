<template>
  <div class="contact-form">
    <div class="bg-white py-14 lg:py-24">
      <div class="max-w-xl m-auto">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Contact us</h1>
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