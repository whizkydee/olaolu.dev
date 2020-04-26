const Fs = require('fs')
const fs = Fs.promises
const path = require('path')
const runAll = require('npm-run-all')
const moveFile = require('move-file')
const { promisify } = require('util')
const glob = promisify(require('glob'))
const { excludeFromShelfDir } = require('../config')

const { log, error } = console
const root = path.resolve(__dirname, '../')
const dist = { shelf: 'shelf/dist', landing: 'landing/dist' }
const routesToFixRE = new RegExp(
  `/shelf/(${excludeFromShelfDir.join('|').replace('-', '\\-')})+`,
  'g'
)

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
    // Fix broken routes like "work", "resume", "work-images"
    // prefixed with "/shelf/" across the shelf environment.
    await patchBrokenRoutes()

    // Merge "landing/dist" and "shelf/dist" into a single "dist" directory.
    await mergeDistDirectories()
  } catch (e) {
    error('❌ BUILD FAILED!!', e)
  }
}

async function patchBrokenRoutes() {
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
        const result = fileContent.replace(routesToFixRE, (_, p1) => '/' + p1)

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

async function mergeDistDirectories() {
  try {
    const rootDist = path.join(root, 'dist')
    const distFiles = Object.fromEntries(
      Object.entries(dist).map(([key, value]) => [key, Fs.readdirSync(value)])
    )

    // Create "dist" in the root directory.
    await fs.mkdir(rootDist, { recursive: true })

    // Move files from the homepage dist directory to the root dist directory
    for (let file of distFiles.landing) {
      await moveFile(path.join(dist.landing, file), path.join(rootDist, file))
    }
    log(
      '✅ Success! Files in landing/dist have been moved...' +
        '\n   ' +
        'Proceeding to shelf dist files...'
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
    log(
      '✨ All done! Both dist directories have been merged ' +
        'into the root dist directory.'
    )
  } catch (exception) {
    throw exception
  }
}

async function createRedirectRules() {
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

    await fs.writeFile(path.join(root, 'netlify.toml'), result + '\n')
  } catch (exception) {
    throw exception
  }
}

main()
