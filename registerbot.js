const puppeteer = require("puppeteer");
// enter email you wish to use.
let email = '';
const password = require("./password.js");

function register(a) {
    puppeteer
        .launch({
            headless: false
        })
        .then(async (browser) => {
            let page = await browser.newPage();
            page.setViewport({
                width: 600,
                height: 600,
                isMobile: false,
            });
            page.goto(`https://www.reddit.com/register/?dest=https://www.reddit.com/?signup_survey=false`, {
                waitUntil: "networkidle2",
            });
            await page.waitForSelector('input[id="regEmail"]');
            await page.waitForTimeout(100);
            await page.type('input[id="regEmail"]', a);
            await page.$eval('button[type="submit"]', e => e.click());
            await page.waitForTimeout(100);
            await page.waitForSelector('input[id="regUsername"]');
            console.log(await page.$eval('a[class="Onboarding__usernameSuggestion"]', e => e.getAttribute('data-username')));
            await page.$eval('a[class="Onboarding__usernameSuggestion"]', e => e.click());
            await page.waitForSelector('input[id="regPassword"]');
            await page.waitForTimeout(100);
            await page.type('input[id="regPassword"]', password);
            await page.$eval('button[data-step="username-and-password"]', e => e.click());
            await page.mouse.click(0, 0);
            await page.waitForTimeout(1000);
            await page.mouse.click(50, 315);
        });
};

register(email);
