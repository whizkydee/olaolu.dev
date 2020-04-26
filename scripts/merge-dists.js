import path from 'path'
import { default as Fs, promises as fs } from 'fs'
import moveFile from 'move-file'
import { root, dist, log, excludeFromShelfDir } from './util'

export default async function mergeDistDirectories() {
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
