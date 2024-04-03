import Elysia from 'elysia'

import { foo } from 'lib'

export const hello = new Elysia({
  prefix: '/api',
}).get('/hello', () => foo())
