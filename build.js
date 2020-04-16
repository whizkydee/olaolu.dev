const Fs = require('fs')
const fs = Fs.promises
const path = require('path')
const makeDir = require('make-dir')
const runAll = require('npm-run-all')
const moveFile = require('move-file')
const { promisify } = require('util')
const glob = promisify(require('glob'))
const { excludeFromShelfDir } = require('./config')

const dist = { shelf: 'shelf/dist', landing: 'landing/dist' }
const htmlGlob = path.join(dist.shelf, '**/*.html')
const routesToFixRE = new RegExp(
  '/shelf/(' + excludeFromShelfDir.join('|').replace('-', '\\-') + ')+',
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

        for (const path of htmlFiles) {
          await fs.access(path, fs.F_OK).then(async () => {
            const fileContent = await fs.readFile(path, { encoding: 'utf8' })

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
            await fs.writeFile(path, result)
          })
        }
        console.log(
          '✅ Success! Patched broken routes in the shelf environment.'
        )
      } catch (e) {
        console.error(e)
      }
    })

    console.log(
      '✅ INDIVIDUAL BUILDS SUCCESSFUL... Proceeding to combined build...'
    )

    // Move files from the homepage dist directory to the root dist directory
    for (let path of distFiles.landing) {
      await moveFile(path.join(dist.landing, path), path.join(rootDist, path))
    }
    console.log(
      '✅ landing dist files moved... Proceeding to shelf dist files...'
    )

    // Move files from the shelf dist directory to the root dist directory
    for (let path of distFiles.shelf) {
      await moveFile(
        path.join(dist.shelf, path),
        path.join(
          rootDist,
          excludeFromShelfDir.includes(path) ? '/' : '/shelf/',
          path
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
