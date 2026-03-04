const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const htmlFiles = [
  'cryotherapy-chamber-buying-guide.html',
  'pemf-mat-buying-guide.html',
  'choose-right-red-light-device.html',
  'red-light-vs-infrared-sauna.html',
  '2026-wellness-trends.html',
  'compression-therapy-buying-guide.html'
];

const blogOgDir = path.join(__dirname, 'public', 'blog-og');

async function generateOGImages() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const htmlFile of htmlFiles) {
    const htmlPath = path.join(blogOgDir, htmlFile);
    const pngFile = htmlFile.replace('.html', '.png');
    const pngPath = path.join(blogOgDir, pngFile);

    console.log(`Generating ${pngFile}...`);

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    await page.screenshot({
      path: pngPath,
      type: 'png'
    });

    await page.close();
    console.log(`✓ Created ${pngFile}`);
  }

  await browser.close();
  console.log('\nAll OG images generated successfully!');
}

generateOGImages().catch(console.error);