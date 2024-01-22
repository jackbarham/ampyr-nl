<template>
  <div class="flex flex-col h-screen justify-between" :class="{ 'fixed w-full': fixed }">
    <MainHeader />
    <main role="main" class="mb-auto">
      <div class="overflow-hidden">
        <slot />
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
const fixed = ref(false)

useListen('toggleFixed', () => {
  fixed.value = !fixed.value
})

useListen('closeFixed', () => {
  fixed.value = false
})
</script>