<template>
  <div class="text-center">
    <p>
      The button has been clicked
      <span data-testid="count">{{ count }}</span> times
    </p>
    <button
      data-testid="button"
      class="bg-black text-white px-3 py-2 mt-2 rounded"
      @click="increment"
    >
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
// You can use the useCounter composable
// --------------------------------------------------
import useCounter from '@/composables/useCounter'

const { count, increment } = useCounter()

// Or you can do it manually
// -------------------------
// import { ref } from 'vue'
//
// const count = ref(0)
//
// const increment = (): void => {
//   count.value++
// }
</script>
