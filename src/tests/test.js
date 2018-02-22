const puppeteer = require('puppeteer');
const BUTTON_BOY = '.button.boy';

test('I should see frontpage (gender select)', async () => {
    let browser = await puppeteer.launch({
        headless: false,
    });
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    const html = await page.$eval('.action-container', e => e.innerHTML);
    expect(html).toContain('Drongur');
    expect(html).toContain('Genta');

    browser.close();
}, 16000);

test('I should see a boy name', async () => {
    let browser = await puppeteer.launch({
        headless: false,
    });
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    const html = await page.$eval('.action-container', e => e.innerHTML);
    
    await page.click(BUTTON_BOY);
    const newHtml = await page.$eval('.action-container', e => e.innerHTML);
   
    expect(newHtml).toContain('Ja');
    expect(newHtml).toContain('Nei');

    browser.close();
}, 16000);
