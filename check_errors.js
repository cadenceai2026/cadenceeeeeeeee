import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log(`PAGE LOG [${msg.type()}]:`, msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log("Checking index.html...");
  await page.goto('http://localhost:5173/index.html', { waitUntil: 'networkidle2' });
  
  console.log("Checking login.html...");
  await page.goto('http://localhost:5173/login.html', { waitUntil: 'networkidle2' });

  console.log("Checking app.html...");
  await page.goto('http://localhost:5173/app.html', { waitUntil: 'networkidle2' });

  await browser.close();
})();
