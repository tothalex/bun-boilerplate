import { $ } from 'bun'

const packages = ['packages/http', 'packages/lib', 'packages/html']

const lint = async () => {
  packages.forEach(async (pkg) => {
    await $`cd ${pkg} && bun lint`
  })
}

const dev = async () => {
  console.log('asd')
}

const commands: Record<string, () => Promise<void>> = {
  lint,
  dev
}

const command = process.argv[2]

if (!Object.keys(commands).includes(command)) {
  console.error(`invalid command - ${command}`)
  process.exit(0)
}

commands[command]()
