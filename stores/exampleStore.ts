import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useExampleStore = defineStore('example', () => {
  const exampleRef = ref(false)

  const oppositeExample = computed(() => {
    return !exampleRef.value
  })

  function toggleExample() {
    exampleRef.value = !exampleRef.value
  }

  return {
    // refs
    exampleRef,

    // computed
    oppositeExample,

    // actions
    toggleExample,
  }
})

export default useExampleStore
