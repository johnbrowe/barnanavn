const puppeteer = require('puppeteer');
const BUTTON_BOY = '.button.boy';

test('I should see frontpage (Select gender)', async () => {
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

test('I be able to select gender', async () => {
    let browser = await puppeteer.launch({
        headless: false,
    });
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    await page.click(BUTTON_BOY);
    const newHtml = await page.$eval('.action-container', e => e.innerHTML);
   
    expect(newHtml).toContain('Ja');
    expect(newHtml).toContain('Nei');

    browser.close();
}, 16000);

test('I should be redirected to select gender page if i have not selected a gender', async () => {
    let browser = await puppeteer.launch({
        headless: false,
    });
    let page = await browser.newPage();

    await page.goto('http://localhost:3000/navn');
    await page.waitForSelector('.App');

    const html = await page.$eval('.action-container', e => e.innerHTML);
    expect(html).toContain('Drongur');
    expect(html).toContain('Genta');
    browser.close();
}, 16000);


test('I should be redirected to name component if i have selected a gender', async () => {
    let browser = await puppeteer.launch({
        headless: false,
    });
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    await page.click(BUTTON_BOY);

    await page.goto('http://localhost:3000');
    const newHtml = await page.$eval('.action-container', e => e.innerHTML);


    expect(newHtml).toContain('Ja');
    expect(newHtml).toContain('Nei');

    browser.close();
}, 16000);