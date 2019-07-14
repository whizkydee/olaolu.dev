const fs = require('fs')
const path = require('path')
const makeDir = require('make-dir')
const runAll = require('npm-run-all')
const moveFile = require('move-file')

const dist = { shelf: 'shelf/dist', landing: 'landing/dist' }

// Run the production build scripts for homepage (vue-cli)
// and the shelf (gridsome).
runAll(['build:*'], {
  parallel: true,
  printLabel: true,
  stdin: process.stdin,
  continueOnError: true,
  stdout: process.stdout,
  stderr: process.stderr,
})
  .then(async () => {
    const rootDist = await makeDir('dist')
    const distFiles = {
      shelf: fs.readdirSync(dist.shelf),
      landing: fs.readdirSync(dist.landing),
    }

    console.log(
      '✅ INDIVIDUAL BUILDS SUCCESSFUL... Proceeding to combined build...'
    )

    // Move files from the homepage dist files to the root dist files
    for (let file of distFiles.landing) {
      await moveFile(path.join(dist.landing, file), path.join(rootDist, file))
    }
    console.log(
      '✅ landing dist files moved... Proceeding to shelf dist files...'
    )

    // Move files from the shelf dist files to the root dist files
    for (let file of distFiles.shelf) {
      await moveFile(
        path.join(dist.shelf, file),
        path.join(rootDist, '/shelf/', file)
      )
    }

    console.log(
      '✅ All done! dist files have been merged into the root dist directory.'
    )
  })
  .catch(err => {
    console.log('❌ BUILD FAILED!!', err)
  })
