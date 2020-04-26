import { error } from './util'
import runAll from 'npm-run-all'
import mergeDistDirectories from './merge-dists'
import patchBrokenRoutes from './patch-broken-routes'

async function main() {
  try {
    // Run the production build scripts for homepage (vue-cli)
    // and the shelf (gridsome).
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

main()
