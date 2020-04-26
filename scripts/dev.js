import runAll from 'npm-run-all'

// Run the development scripts for homepage (vue-cli)
// and the shelf (gridsome).
runAll(['serve:*'], {
  parallel: true,
  printLabel: true,
  stdin: process.stdin,
  continueOnError: true,
  stdout: process.stdout,
  stderr: process.stderr,
})
  .then(() => {
    console.log('done!')
  })
  .catch(err => {
    console.log('failed!', err)
  })
