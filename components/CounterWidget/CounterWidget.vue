<template>
  <div class="text-center">
    <p>
      The button has been clicked
      <span data-testid="count">{{ count }}</span> times
    </p>
    <button
      data-testid="button"
      class="bg-slate-500 px-3 py-2 text-white mt-2"
      @click="increase"
    >
      Increase count
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increase = (): void => {
  count.value++
}
</script>
