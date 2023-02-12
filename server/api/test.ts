interface Response {
  success: boolean
  message: string
}

export interface TestResponse extends Response {
  catFacts: string[]
}

interface CatFact {
  createdAt: string
  deleted: boolean
  source: string
  status: {
    verified: boolean
    feedback: string
    sentCount: number
  }
  text: string
  type: string
  updatedAt: string
  used: boolean
  user: string
  __v: number
  _id: string
}

export default defineEventHandler(async (): Promise<TestResponse> => {
  const cats = (await fetch('https://cat-fact.herokuapp.com/facts/').then((d) =>
    d.json(),
  )) as CatFact[]

  return {
    success: true,
    message:
      'test route working, calling https://cat-fact.herokuapp.com/facts/ from server.',
    catFacts: cats.map((cat: CatFact) => cat.text),
  }
})
