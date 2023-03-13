import puppeteer from 'puppeteer'
import kill from 'tree-kill'
import { log } from './util'
import { spawn } from 'child_process'
import { SHELF_PORT, PDF_INFO } from '../config'

let documentGenerated = false
async function main() {
  const pdfURL = `http://localhost:${SHELF_PORT}/resume?pdf=true`
  const pdfFilePath = 'landing/public/Resume-Olaolu-Olawuyi.pdf'

  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setViewport({
      width: 1680,
      height: 971,
      deviceScaleFactor: 1.5,
    })

    await page.goto(pdfURL, { waitUntil: 'networkidle2' })
    const height = await page.evaluate(() =>
      parseInt(getComputedStyle(document.body).height)
    )

    await page.pdf({
      printBackground: true,
      width: PDF_INFO.WIDTH,
      height: Math.min(height, PDF_INFO.MAX_HEIGHT),
      path: pdfFilePath,
      margin: {
        top: PDF_INFO.MARGIN,
        right: PDF_INFO.MARGIN,
        bottom: PDF_INFO.MARGIN,
        left: PDF_INFO.MARGIN,
      },
    })

    log('📄 Done generating the resume PDF.')
    await browser.close()
  } catch (e) {
    const shelfServerNotRunning = e.message.startsWith(
      'net::ERR_CONNECTION_REFUSED'
    )

    // Instead of breaking the entire build process when the shelf
    // server is not running, automatically start it (the server)
    // and re-run the PDF generation script. Kill the process after.
    if (shelfServerNotRunning) {
      const shelfServeProc = spawn('yarn', ['serve:shelf'])

      log(`Starting the shelf server since it wasn't running already..`)

      // Make sure to print errors from the shelf serve process.
      shelfServeProc.stderr.on('error', err => {
        process.stderr.write(err.toString())
      })

      shelfServeProc.stdout.on('data', async output => {
        const shelfServerRunning = output.toString().includes('Site running at')
        if (!shelfServerRunning || documentGenerated) {
          return
        }

        log('Shelf development server is now running')

        // Attempt to re-run the resume PDF generation script.
        log('Re-running the PDF generation script...')
        await main()

        documentGenerated = true
        // Kill the process once we're done.
        kill(shelfServeProc.pid)
      })

      shelfServeProc.on('close', () => process.exit(0))
    } else {
      console.error(e)
      process.exit(1)
    }
  }
}

main()
