<template>
  <CounterWidget class="mt-7" />
  <p class="text-center mt-7">{{ catFact }}</p>
  <hr class="mt-6 mb-6" />
  <div class="text-center">
    <h3 class="font-bold mb-4">pinia store data</h3>
    <label>
      name:
      <input
        class="border"
        :value="testStore.myName"
        @input="(event) => testStore.setMyName((event.target as HTMLInputElement).value)"
      />
    </label>
    <label>
      mood:
      <input
        class="border"
        :value="testStore.myMood"
        @input="(event) => testStore.setMyMood((event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CounterWidget from '~~/components/CounterWidget/CounterWidget.vue'
import { useTestStore } from '~~/stores/testStore'

const { data } = await useFetch('/api/test') // useFetch runs on the server, passes the data on page render

const catFact = computed(() => {
  const catFacts = data?.value?.catFacts

  if (!catFacts) return 'No cat facts, sorry.'

  const num = (Math.random() * catFacts?.length) | 0

  return catFacts[num]
})

const testStore = useTestStore()
</script>
