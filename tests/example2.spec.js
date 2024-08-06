const { test, expect } = require("@playwright/test");

//teastcase 3 : Login with email
test("Login by entering email", async ({ page }) => {
  await page.goto("https://claude.ai/login?returnTo=%2F%3F");

  await expect(page).toHaveTitle(/Claude/);

  await page.fill('input[type="email"]', "example.test@gmail.com");
  await page.click('button:has-text("Continue with email")');

  await page.click('button:has-text("Verify Email Address")');

  await expect(page).toHaveURL("https://claude.ai/new");
});
