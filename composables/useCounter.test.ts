import { describe, expect, it } from 'vitest'
import useCounter from './useCounter'

describe('useCounter', () => {
  it('increments', () => {
    const { count, increment } = useCounter()
    expect(count.value).toBe(0)

    increment()
    expect(count.value).toBe(1)
  })
})
