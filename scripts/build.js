const Fs = require('fs')
const fs = Fs.promises
const path = require('path')
const makeDir = require('make-dir')
const runAll = require('npm-run-all')
const moveFile = require('move-file')
const { promisify } = require('util')
const glob = promisify(require('glob'))
const { excludeFromShelfDir } = require('../config')

const dist = { shelf: 'shelf/dist', landing: 'landing/dist' }
const htmlGlob = path.join(dist.shelf, '**/*.html')
const routesToFixRE = new RegExp(
  `/shelf/(${excludeFromShelfDir.join('|').replace('-', '\\-')})+`,
  'g'
)

// Run the production build scripts for homepage (vue-cli)
// and the shelf (gridsome).
async function main() {
  try {
    await runAll(['build:*'], {
      parallel: true,
      printLabel: true,
      stdin: process.stdin,
      continueOnError: true,
      stdout: process.stdout,
      stderr: process.stderr,
    })
    const rootDist = await makeDir('dist')
    const distFiles = {
      shelf: Fs.readdirSync(dist.shelf),
      landing: Fs.readdirSync(dist.landing),
    }

    // Fix broken routes like "work", "resume", "work-images"
    // prefixed with "/shelf/" across the shelf environment.
    await glob(htmlGlob).then(async htmlFiles => {
      try {
        console.log(
          'ℹ️  Starting to patch broken routes in the shelf environment...'
        )

        for (const file of htmlFiles) {
          await fs.access(file, fs.F_OK).then(async () => {
            const fileContent = await fs.readFile(file, { encoding: 'utf8' })

            if (
              typeof fileContent != 'string' ||
              !routesToFixRE.test(fileContent)
            )
              return
            const result = fileContent.replace(
              routesToFixRE,
              (_, p1) => '/' + p1
            )

            // Perform a write op on the file with the updated content.
            await fs.writeFile(file, result)
          })
        }

        console.log(
          '✅ Finished patching broken routes in the shelf environment.'
        )
      } catch (e) {
        console.error(e)
      }
    })

    console.log(
      '✅ Individual builds successful... Proceeding to combined build...'
    )

    // Move files from the homepage dist directory to the root dist directory
    for (let file of distFiles.landing) {
      await moveFile(path.join(dist.landing, file), path.join(rootDist, file))
    }
    console.log(
      '✅ Success! Files in landing/dist have been moved... Proceeding to shelf dist files...'
    )

    // Move files from the shelf dist directory to the root dist directory
    for (let file of distFiles.shelf) {
      await moveFile(
        path.join(dist.shelf, file),
        path.join(
          rootDist,
          excludeFromShelfDir.includes(file) ? '/' : '/shelf/',
          file
        )
      )
    }

    console.log(
      '✨ All done! Both dist directories have been merged into the root dist directory.'
    )
  } catch (e) {
    console.error('❌ BUILD FAILED!!', e)
  }
}

main()
