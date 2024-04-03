import { treaty } from '@elysiajs/eden'
import { Http } from 'http/type'

export const api = treaty<Http>(
  import.meta.env.VITE_API || 'localhost:3000',
).api
