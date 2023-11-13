<template>
  <Placeholder heading="Ground-based Solar Generation" />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>