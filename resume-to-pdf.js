const path = require('path')
const save = require('save-file')
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({
    width: 1680,
    height: 971,
  })

  await page.goto('http://localhost:8081/resume', {
    waitUntil: 'networkidle2',
  })
  const height = await page.evaluate(() => document.body.clientHeight)

  await save(
    await page.pdf({
      height,
      width: 1400,
      printBackground: true,
    }),
    path.join(__dirname, `landing/public/Resume-Olaolu-Olawuyi.pdf`)
  )

  await browser.close()
})()
