<template>
  <div class="flex flex-col items-center">
    <h4 class="text-center text-xl font-bold mt-7">Dog fact of the moment</h4>
    <p class="text-center">{{ fact }}</p>

    <button
      class="bg-black text-white px-3 py-2 mt-7 rounded"
      @click="menuOpen = true"
    >
      Open menu
    </button>
    <Teleport v-if="menuOpen" to="#overlay">
      <OverlayMenu
        class="w-56 h-30 text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        @close="menuOpen = false"
      >
        <p>👋</p>
        <p>Hello, I'm an overlay menu!</p>

        <CounterWidget class="mt-7" />
      </OverlayMenu>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import OverlayMenu from '@/components/OverlayMenu/OverlayMenu.vue'
import CounterWidget from '@/components/CounterWidget/CounterWidget.vue'

const menuOpen = ref(false)

const { data } = await useFetch('/api/example')

const fact = computed(() => {
  const dogFacts = data.value?.payload

  if (!dogFacts) return ''

  const num = Math.floor(Math.random() * dogFacts.length)

  return dogFacts[num]
})
</script>
