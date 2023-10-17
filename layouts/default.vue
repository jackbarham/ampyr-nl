<template>
  <div class="flex flex-col h-screen justify-between">
    <TheHeader />
    <main role="main" class="mb-auto">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>