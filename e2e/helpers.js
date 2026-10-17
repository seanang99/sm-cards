/**
 * Opens the pack selector, checks the given pack names, and applies the
 * selection. Assumes the modal is currently closed.
 */
async function selectPacks(page, packNames) {
  await page.locator(".pack-selector-btn").click();
  for (const name of packNames) {
    await page
      .locator(".accordion-header")
      .filter({ hasText: name })
      .locator('input[type="checkbox"]')
      .check();
  }
  await page.getByRole("button", { name: "Apply Selection" }).click();
}

module.exports = { selectPacks };
