const { test, expect } = require("@playwright/test");

//testcase 2 : Login with gmail
test("Login with google", async ({ page }) => {
  await page.goto("https://claude.ai/login?returnTo=%2F%3F");

  await expect(page).toHaveTitle(/Claude/);

  const popupPromis = page.waitForEvent("popup");

  await page.click('button:has-text("Continue with Google")');

  const popup = await popupPromis;

  await popup.waitForLoadState();
  await popup.fill('input[type="email"]', "example.test@gmail.com");
  await popup.click('button:has-text("Next")');

  await expect(page).toHaveURL("https://claude.ai/new");
});
