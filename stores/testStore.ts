import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
  const myName = ref('dj')
  const myMood = ref('caffeinated')

  const setMyName = (name: string) => (myName.value = name)
  const setMyMood = (mood: string) => {
    myMood.value = mood
  }

  return {
    myName,
    setMyName,
    myMood,
    setMyMood,
  }
})
