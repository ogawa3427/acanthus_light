import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  let browser = null;

  try {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'], headless: "new"
    });

    const page = await browser.newPage();
    await page.goto('https://kurisyushien.org/man', { waitUntil: 'networkidle0' });
    const bodyHandle = await page.$('body');

    if (bodyHandle) {
      const html = await page.evaluate(body => body.innerText, bodyHandle);
      await bodyHandle.dispose();
      res.status(200).json({ text: html });
    } else {
      res.status(500).json({ error: 'Body element not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}