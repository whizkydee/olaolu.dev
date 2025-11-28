import path from 'path'
import moveFile from 'move-file'
import { default as Fs, promises as fs } from 'fs'
import { root, dist, excludeFromShelfDir } from './util'

export async function mergeDistDirectories() {
  const rootDist = path.join(root, 'dist')
  const distFilePaths = Object.fromEntries(
    Object.entries(dist).map(([key, value]) => [key, Fs.readdirSync(value)])
  )

  // Create "dist" in the root directory.
  await fs.mkdir(rootDist, { recursive: true })

  // Move files from the homepage dist directory to the root dist directory
  await Promise.all(
    distFilePaths.landing.map(filepath => {
      return moveFile(
        path.join(dist.landing, filepath),
        path.join(rootDist, filepath)
      )
    })
  )

  logger.info(
    `✅ Success! All files in /landing/dist have been moved.`,
    `\n`,
    `Proceeding to shelf dist files...`
  )

  // Move files from the shelf dist directory to the root dist directory
  await Promise.all(
    distFilePaths.shelf.map(filepath => {
      const isFilepathExcluded = excludeFromShelfDir.includes(filepath)
      const subDirectory = isFilepathExcluded ? '/' : '/shelf/'

      return moveFile(
        path.join(dist.shelf, filepath),
        path.join(rootDist, subDirectory, filepath)
      )
    })
  )

  logger.info(
    `✨ All done! Both dist directories have been merged `,
    `into the root dist directory.`
  )
}

// function moveToRootDist(fromDir) {
//   return moveFile(
//     path.join(dist.shelf, filepath),
//     path.join(rootDist, subDirectory, filepath)
//   )
// }
