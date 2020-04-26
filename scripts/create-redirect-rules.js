import path from 'path'
import { promises as fs } from 'fs'
import { root, excludeFromShelfDir } from './util'

export default async function createRedirectRules() {
  try {
    const netlifyBaseConfig = path.join(root, 'netlify.base.toml')
    const configContent = await fs.readFile(netlifyBaseConfig, {
      encoding: 'utf8',
    })

    const result = excludeFromShelfDir.reduce(
      (acc, path) =>
        acc.concat(`
[[redirects]]
  from = "/shelf/${path}"
  to = "/${path}"
  status = 301
  force = true`),
      configContent.replace(/\s$/, '')
    )

    await fs.writeFile(path.join(root, 'netlify.toml'), `${result}\n`)
  } catch (exception) {
    throw exception
  }
}
