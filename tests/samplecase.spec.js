const {test, expect,} = require('@playwright/test');

test('context play wright test',async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://epos.posbytz.dev");
   console.log(await page.title());
   await page.locator("input[placeholder='Your username']").fill("yaswanth");
   await page.locator('[placeholder="Your password"]').fill("qwert@123");
   await page.locator("#js_login").click();
   await expect(page.locator('[id="username-error"]')).toContainText('These credentials');
   console.log("vichu")
});


