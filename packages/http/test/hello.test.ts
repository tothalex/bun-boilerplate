import { describe, it, expect } from 'bun:test'
import { edenTreaty } from '@elysiajs/eden'

import { http } from '../src/http'
import type { Http } from '../src/http'

const client = edenTreaty<Http>('http://localhost:3000')
http.listen(3000)

describe('hello route', () => {
  it('should return a response', async () => {
    const response = await client.api.hello.get()

    expect(response.data).toBe('hello, wolrd!')
  })
})
