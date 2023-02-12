import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from './CounterWidget.vue'

describe('Counter component', () => {
  it('should mount', () => {
    const wrapper = mount(Counter, {
      props: {},
    })

    const button = wrapper.get('[data-testid="button"]')

    expect(button.text()).toBe('Increase count')
  })

  it('should increase the count when button is clicked', async () => {
    const wrapper = mount(Counter, {
      props: {},
    })

    const button = wrapper.get('[data-testid="button"]')
    const count = wrapper.get('[data-testid="count"]')

    expect(count.text()).toBe('0')

    await button.trigger('click')

    expect(count.text()).toBe('1')
  })
})
