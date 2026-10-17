const { test, expect } = require("@playwright/test");
const { selectPacks } = require("./helpers");

test.describe("Scroll-to-top button", () => {
  test("appears after scrolling down and scrolls back to top on click", async ({
    page,
  }) => {
    await page.goto("/");
    // "Prayer" has enough verses to make the page scrollable on both
    // mobile and desktop viewports.
    await selectPacks(page, ["Prayer"]);

    const scrollButton = page.locator(".scroll-to-top-btn");
    await expect(scrollButton).toHaveCount(0);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(scrollButton).toBeVisible();

    await scrollButton.click();

    await expect
      .poll(() => page.evaluate(() => window.scrollY), { timeout: 5000 })
      .toBeLessThan(10);
  });
});
