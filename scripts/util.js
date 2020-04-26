import path from 'path'

const { excludeFromShelfDir } = require('../config')
const root = path.resolve(__dirname, '../')
const dist = { shelf: 'shelf/dist', landing: 'landing/dist' }
const { log, error } = console

function useAsync(promiseCb) {
  return promiseCb()
    .then(result => [null, result])
    .catch(err => [err])
}

export { log, error, root, dist, excludeFromShelfDir, useAsync }
