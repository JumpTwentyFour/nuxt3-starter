<template>
  <NuxtPage />
  <div id="overlay" />
</template>

<style lang="scss">
#overlay {
  @apply fixed top-0 left-0;

  &:has(> *) {
    @apply w-full h-full bg-black bg-opacity-70;
  }
}
</style>
