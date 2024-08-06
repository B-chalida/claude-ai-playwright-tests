const { test, expect } = require("@playwright/test");

// Testcase 1: Open Claude AI website
test("Open the Claude AI website", async ({ page }) => {
  await page.goto("https://claude.ai/login?returnTo=%2F%3F");

  await expect(page).toHaveTitle(/Claude/);

  await expect(page).toHaveTitle(/Claude/);
});
