import path from 'path'
import moveFile from 'move-file'
import { default as Fs, promises as fs } from 'fs'
import { root, dist, log, excludeFromShelfDir, useAsync } from './util'

export default async function() {
  const [result, error] = await useAsync(async () => {
    const rootDist = path.join(root, 'dist')
    const distFiles = Object.fromEntries(
      Object.entries(dist).map(([key, value]) => {
        return [key, Fs.readdirSync(value)]
      })
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
  })
  if (error) throw error
  return result
}
