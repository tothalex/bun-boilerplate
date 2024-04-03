import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { staticPlugin } from '@elysiajs/static'

import { hello } from './routes/hello'

export const http = new Elysia().use(hello)

if (process.env.BUN_ENV === 'local') {
  http.use(cors())
}

if (process.env.BUN_ENV === 'prod') {
  http.use(
    staticPlugin({
      prefix: '',
      assets: '../html/dist',
    }),
  )
}

export type Http = typeof http
