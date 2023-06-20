import { PayloadResponse } from '@/types/response'

export default defineEventHandler((): PayloadResponse<string[]> => {
  const dogFacts = ['Dogs are cute', 'Dogs are loyal', 'Dogs are friendly']

  return {
    success: true,
    message: 'Example endpoint here!',
    payload: dogFacts,
  }
})
