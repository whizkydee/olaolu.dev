import path from 'path'
import moveFile from 'move-file'
import { default as Fs, promises as fs } from 'fs'
import { root, dist, log, excludeFromShelfDir, useAsync } from './util'

export default async () => {
  const [result, error] = await useAsync(async () => {
    const rootDist = path.join(root, 'dist')
    const distFiles = Object.fromEntries(
      Object.entries(dist).map(([key, value]) => [key, Fs.readdirSync(value)])
    )

    // Create "dist" in the root directory.
    await fs.mkdir(rootDist, { recursive: true })

    // Move files from the homepage dist directory to the root dist directory
    await Promise.all(
      distFiles.landing.map(file => {
        return moveFile(
          path.join(dist.landing, file),
          path.join(rootDist, file)
        )
      })
    )

    log(
      `✅ Success! All files in /landing/dist have been moved.
   Proceeding to shelf dist files...`
    )

    // Move files from the shelf dist directory to the root dist directory
    await Promise.all(
      distFiles.shelf.map(file => {
        const subDirectory = excludeFromShelfDir.includes(file)
          ? '/'
          : '/shelf/'

        return moveFile(
          path.join(dist.shelf, file),
          path.join(rootDist, subDirectory, file)
        )
      })
    )

    log(
      `✨ All done! Both dist directories have been merged into the root dist directory.`
    )
  })

  if (error != null) {
    throw error
  }
  return result
}
