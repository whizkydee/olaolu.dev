import path from 'path'
import { dist, log, excludeFromShelfDir } from './util'
import { promisify } from 'util'
import { promises as fs } from 'fs'
import createRedirectRules from './create-redirect-rules'

const glob = promisify(require('glob'))
const routesToFixRE = new RegExp(
  `/shelf/(${excludeFromShelfDir.join('|').replace('-', '\\-')})+`,
  'g'
)

export default async function patchBrokenRoutes() {
  try {
    const htmlFiles = await glob(path.join(dist.shelf, '**/*.html'))

    log('ℹ️  Starting to patch broken routes in the shelf environment...')
    // Automate creation of redirect rules for "/shelf/(work|resume|work-images)"
    await createRedirectRules()

    // Search for occurences of "/shelf/(work|resume|work-images)"
    // in html files then strip off "/shelf" and update the file.
    for (const file of htmlFiles) {
      await fs.access(file, fs.F_OK).then(async () => {
        const fileContent = await fs.readFile(file, { encoding: 'utf8' })

        if (typeof fileContent != 'string' || !routesToFixRE.test(fileContent))
          return
        const result = fileContent.replace(routesToFixRE, (_, p1) => `/${p1}`)

        // Perform a write op on the file with the updated content.
        await fs.writeFile(file, result)
      })
    }

    log(
      '✅ Finished patching broken routes in the shelf environment.' +
        '\n   ' +
        'Individual builds successful... Proceeding to combined build...'
    )
  } catch (exception) {
    throw exception
  }
}
