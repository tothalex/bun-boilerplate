import { $ } from 'bun'

const packages = {
  html: 'packages/html',
  http: 'packages/http',
  lib: 'packages/lib',
}

const lint = async () => {
  Object.values(packages).forEach(async (pkg) => {
    await $`cd ${pkg} && bun lint`
  })
}

const dev = async () => {
  await Promise.all([
    $`cd ${packages.html} && bun dev`,
    $`cd ${packages.http} && bun dev`,
  ])
}

const commands: Record<string, () => Promise<void>> = {
  lint,
  dev,
}

const command = process.argv[2]

if (!Object.keys(commands).includes(command)) {
  console.error(`invalid command - ${command}`)
  process.exit(0)
}

commands[command]()
