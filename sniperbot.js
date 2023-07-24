const puppeteer = require("puppeteer");
const password = require("./password.js");
// enter account names here.
let accounts = [];
// link to the reddit post you want to snipe.
let link = "";

function k(name, type) {
    puppeteer
        .launch({
            headless: false
        })
        .then(async (browser) => {
            let page = await browser.newPage();
            page.goto(`https://www.reddit.com/login/?dest=${link}`, {
                waitUntil: "networkidle2",
            });
            await page.waitForSelector('input[id="loginUsername"]');
            await page.waitForSelector('input[id="loginPassword"]');
            await page.waitForTimeout(100);
            await page.type('input[id="loginUsername"]', name);
            await page.type('input[id="loginPassword"]', password);
            await page.$eval('button[type="submit"]', e => e.click());
            await page.waitForTimeout(1000);
            await page.$eval('a', e => e.click());
            await page.waitForTimeout(2000);
            if (!type) {
                await page.$eval('button[aria-label="downvote"]', e => e.click());
            } else {
                await page.$eval('button[aria-label="upvote"]', e => e.click());
            }
        });
};

for (let count = 0; count < accounts.length; count++) {
    k(accounts[count], 0);
};
