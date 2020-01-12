const path = require('path')
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({
    width: 1680,
    height: 971,
  })

  await page.goto('http://localhost:8081/resume?pdf=true', {
    waitUntil: 'networkidle2',
  })

  const height = await page.evaluate(() =>
    parseInt(getComputedStyle(document.body).height)
  )

  await page.pdf({
    width: '1230px',
    printBackground: true,
    height: Math.min(height, 3090),
    margin: {
      top: '85px',
      right: '85px',
      bottom: '85px',
      left: '85px',
    },
    path: path.join(__dirname, 'landing/public/Resume-Olaolu-Olawuyi.pdf'),
  })

  await browser.close()
})()
