import { ref } from 'vue'

const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++

  return {
    count,
    increment,
  }
}

export default useCounter
