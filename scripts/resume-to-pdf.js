import puppeteer from 'puppeteer'
import {spawn} from 'node:child_process'

const resumeUrl = 'http://localhost:3000/resume?pdf=true'
const pdfFilePath = 'public/Resume-Olaolu-Olawuyi.pdf'

async function main() {
  let server

  if (!(await serverIsReady())) {
    server = spawn('yarn', ['dev'], {stdio: 'inherit'})
    await waitForServer()
  }

  try {
    await generatePdf()
  } finally {
    server?.kill('SIGTERM')
  }
}

async function serverIsReady() {
  try {
    const response = await fetch(resumeUrl)
    return response.ok
  } catch {
    return false
  }
}

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (await serverIsReady()) return
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  throw new Error(
    'The Next.js development server did not become ready in time.'
  )
}

async function generatePdf() {
  const browser = await puppeteer.launch()

  try {
    const page = await browser.newPage()
    await page.setViewport({
      width: 1680,
      height: 971,
      deviceScaleFactor: 1.5,
    })
    await page.goto(resumeUrl, {waitUntil: 'networkidle2'})
    const height = await page.evaluate(() =>
      parseInt(getComputedStyle(document.body).height)
    )

    await page.pdf({
      printBackground: true,
      pageRanges: '1',
      width: '1230px',
      height: Math.min(height, 3090),
      path: pdfFilePath,
      margin: {top: '85px', right: '85px', bottom: '85px', left: '85px'},
    })

    console.log(`Resume PDF written to ${pdfFilePath}`)
  } finally {
    await browser.close()
  }
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
