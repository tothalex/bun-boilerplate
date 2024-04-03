import { it, describe, expect } from 'bun:test'

import { foo } from '../src/foo'

describe('foo', () => {
  it('should return hello, wolrd', () => {
    expect(foo()).toBe('hello, wolrd!')
  })
})
