const path = require('path')
const puppeteer = require('puppeteer')

async function main() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const pageMargin = {
    top: '85px',
    right: '85px',
    bottom: '85px',
    left: '85px',
  }

  await page.setViewport({
    width: 1680,
    height: 971,
    deviceScaleFactor: 1.5,
  })

  await page.goto('http://localhost:8081/resume?pdf=true', {
    waitUntil: 'networkidle2',
  })

  const height = await page.evaluate(() => {
    return parseInt(getComputedStyle(document.body).height)
  })

  await page.pdf({
    width: '1230px',
    margin: pageMargin,
    printBackground: true,
    height: Math.min(height, 3090),
    path: path.join(__dirname, 'landing/public/Resume-Olaolu-Olawuyi.pdf'),
  })

  await browser.close()
}

main()
