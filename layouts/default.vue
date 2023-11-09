<template>
  <div class="flex flex-col h-screen justify-between">
    <TheHeader />
    <main role="main" class="mb-auto">
      <div class="overflow-hidden">
        <slot />
      </div>
    </main>
    <TheFooter />
  </div>
</template>