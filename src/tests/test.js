const puppeteer = require('puppeteer');
import { isDebugging } from "./testingInit.js";
const BUTTON_BOY = '.button.boy';
const BUTTON_GIRL = '.button.girl';

test('I should see frontpage (Select gender)', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    const html = await page.$eval('.action-container', e => e.innerHTML);
    expect(html).toContain('Drongur');
    expect(html).toContain('Genta');

    browser.close();
}, 16000);

test('I be able to select gender', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    await page.click(BUTTON_BOY);
    const newHtml = await page.$eval('.action-container', e => e.innerHTML);
   
    expect(newHtml).toContain('Ja');
    expect(newHtml).toContain('Nei');

    browser.close();
}, 16000);

test('I should be able to click yes to select boy name', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    await page.click(BUTTON_BOY);
    const name = await page.$eval('.display-name', e => e.innerHTML);

    await page.click('button.button-yes');

    await page.click('.tab-menu li:nth-of-type(3)');

    const nameList = await page.$eval('.action-box', e => e.innerHTML);

    expect(nameList).toContain(name);

    browser.close();
});

test('I should be able to click yes to select girl name', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    await page.click(BUTTON_BOY);
    const name = await page.$eval('.display-name', e => e.innerHTML);

    await page.click('button.button-yes');

    await page.click('.tab-menu li:nth-of-type(3)');

    const nameList = await page.$eval('.action-box', e => e.innerHTML);

    expect(nameList).toContain(name);

    browser.close();
});

test('I should be able to click no to select boy name', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    await page.click(BUTTON_BOY);
    const name = await page.$eval('.display-name', e => e.innerHTML);

    await page.click('button.button-no');

    await page.click('.tab-menu li:nth-of-type(1)');

    const nameList = await page.$eval('.action-box', e => e.innerHTML);

    expect(nameList).toContain(name);

    browser.close();
});

test('I should be able to click no on a select girl name', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.App');

    await page.click(BUTTON_GIRL);
    const name = await page.$eval('.display-name', e => e.innerHTML);

    await page.click('button.button-no');

    await page.click('.tab-menu li:nth-of-type(1)');

    const nameList = await page.$eval('.action-box', e => e.innerHTML);

    expect(nameList).toContain(name);

    browser.close();
});

test('I should be redirected to select gender page if i have not selected a gender', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto('http://localhost:3000/navn');
    await page.waitForSelector('.App');

    const html = await page.$eval('.action-container', e => e.innerHTML);
    expect(html).toContain('Drongur');
    expect(html).toContain('Genta');
    browser.close();
}, 16000);


test('I should be redirected to name component if i have selected a gender', async () => {
    let browser = await puppeteer.launch();
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