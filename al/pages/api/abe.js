import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://kurisyushien.org/man', { waitUntil: 'networkidle0' });
  const bodyHandle = await page.$('body');

  if (bodyHandle) {
    const html = await page.evaluate(body => body.innerText, bodyHandle);
    await bodyHandle.dispose();
    await browser.close();

    res.status(200).json({ text: html });
  } else {
    res.status(500).json({ error: 'Body element not found' });
  }
}