import { http } from './http'

const port = process.env.PORT || 3000

http.listen(port)

console.log(
  `HTTP server is running at ${http.server?.hostname}:${http.server?.port}`,
)
