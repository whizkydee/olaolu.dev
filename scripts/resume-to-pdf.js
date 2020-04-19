const path = require('path')
const kill = require('tree-kill')
const puppeteer = require('puppeteer')
const { SHELF_PORT } = require('../config')
const spawn = require('child_process').spawn

async function main() {
  try {
    const pdfURL = `http://localhost:${SHELF_PORT}/resume?pdf=true`
    const pdfFilePath = 'landing/public/Resume-Olaolu-Olawuyi.pdf'

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setViewport({
      width: 1680,
      height: 971,
      deviceScaleFactor: 1.5,
    })

    await page.goto(pdfURL, { waitUntil: 'networkidle2' })
    const height = await page.evaluate(() => {
      return parseInt(getComputedStyle(document.body).height)
    })

    await page.pdf({
      printBackground: true,
      width: '1230px',
      height: Math.min(height, 3090),
      path: pdfFilePath,
      margin: { top: '85px', right: '85px', bottom: '85px', left: '85px' },
    })

    await browser.close()
  } catch (e) {
    const shelfServerNotRunning = e.message.startsWith(
      'net::ERR_CONNECTION_REFUSED'
    )

    if (shelfServerNotRunning) {
      // Instead of breaking the entire build process when the shelf
      // server is not running, automatically start it (the server)
      // and re-run the PDF generation script. Kill the process after.
      const shelfServeProc = spawn('yarn', ['serve:shelf'])

      console.log(
        `Starting the shelf development server since it wasn't running already...`
      )
      shelfServeProc.stderr.on('error', err => {
        process.stderr.write(err.toString())
      })

      shelfServeProc.stdout.on('data', async output => {
        if (output.toString().includes('Site running at')) {
          console.log('Shelf development server is now running')

          // Attempt to re-run the resume PDF generation script.
          console.log('Re-running the PDF generation script...')
          await main()

          // Kill the process once we're done.
          kill(shelfServeProc.pid)
        }
      })

      shelfServeProc.on('close', code => {
        console.log(
          'Done generating the resume PDF. Finished with code ' + code
        )
        process.exit(0)
      })
    } else {
      console.error(e)
      process.exit(1)
    }
  }
}

main()
