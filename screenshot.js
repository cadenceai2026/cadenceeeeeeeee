import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  await page.goto('http://localhost:5173/index.html', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'index_shot.png' });
  
  await page.goto('http://localhost:5173/login.html', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'login_shot.png' });

  await browser.close();
})();
