const { test, expect } = require("@playwright/test");
const { selectPacks } = require("./helpers");

test.describe("Multi-select memory pack filtering", () => {
  test("selecting multiple packs shows the union of their verses", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Please select memory packs to get started")
    ).toBeVisible();

    await selectPacks(page, ["5 Assurances", "Prayer"]);

    await expect(page.locator(".pack-selector-btn")).toHaveText(
      "2 Packs, 37 Verses"
    );
    const verseList = page.locator(".page-body");
    await expect(
      verseList.getByText("Assurance of Salvation", { exact: true })
    ).toBeVisible();
    await expect(
      verseList.getByText("Cease not to pray", { exact: true })
    ).toBeVisible();
  });

  test("deselecting a pack narrows the verse list back down", async ({ page }) => {
    await page.goto("/");
    await selectPacks(page, ["5 Assurances", "Prayer"]);
    await expect(page.locator(".pack-selector-btn")).toHaveText(
      "2 Packs, 37 Verses"
    );

    await page.locator(".pack-selector-btn").click();
    await page
      .locator(".accordion-header")
      .filter({ hasText: "Prayer" })
      .locator('input[type="checkbox"]')
      .uncheck();
    await page.getByRole("button", { name: "Apply Selection" }).click();

    await expect(page.locator(".pack-selector-btn")).toHaveText(
      "1 Pack, 5 Verses"
    );
    await expect(
      page.locator(".page-body").getByText("Cease not to pray", { exact: true })
    ).toHaveCount(0);
  });
});
