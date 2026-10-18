const { test, expect } = require("@playwright/test");
const { selectPacks } = require("./helpers");

// "Assurance of Salvation" from the "5 Assurances" pack (src/resources/memoryVerses.json)
const REFERENCE = "1 John 5:11-12";
const CORRECT_TITLE = "Assurance of Salvation";
const CORRECT_VERSE =
  "And this is the testimony: God has given us eternal life, and this life is in his Son. He who has the Son has life; he who does not have the Son of God does not have life.";

function getCard(page) {
  return page.locator(".card").filter({ hasText: REFERENCE });
}

test.describe("Test mode verse validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await selectPacks(page, ["5 Assurances"]);
    await page.getByLabel("Test Mode").check();
  });

  test("submitting with blank fields shows validation errors", async ({ page }) => {
    const card = getCard(page);
    await card.getByRole("button", { name: "Check" }).click();

    await expect(card.getByText("Title cannot be blank")).toBeVisible();
    await expect(card.getByText("Verse cannot be blank")).toBeVisible();
  });

  test("correct title and verse shows positive feedback", async ({ page }) => {
    const card = getCard(page);
    await card.locator('input[type="text"]').fill(CORRECT_TITLE);
    await card.locator("textarea").fill(CORRECT_VERSE);
    await card.getByRole("button", { name: "Check" }).click();

    await expect(card.locator(".feedback")).toHaveText(
      "Correct Answer! Well done!"
    );
  });

  test("incorrect title and verse shows the correction", async ({ page }) => {
    const card = getCard(page);
    await card.locator('input[type="text"]').fill("Wrong Title");
    await card.locator("textarea").fill("Wrong verse text");
    await card.getByRole("button", { name: "Check" }).click();

    await expect(card.locator(".feedback")).toHaveText(
      "Incorrect Title and Verse!"
    );
    await expect(card.getByText(CORRECT_TITLE, { exact: true })).toBeVisible();
    await expect(card.getByText(CORRECT_VERSE, { exact: true })).toBeVisible();
  });

  test("clear resets the inputs and hides feedback", async ({ page }) => {
    const card = getCard(page);
    await card.locator('input[type="text"]').fill(CORRECT_TITLE);
    await card.locator("textarea").fill(CORRECT_VERSE);
    await card.getByRole("button", { name: "Check" }).click();
    await expect(card.locator(".feedback")).toBeVisible();

    await card.getByRole("button", { name: "Clear" }).click();

    await expect(card.locator(".feedback")).toHaveCount(0);
    await expect(card.locator('input[type="text"]')).toHaveValue("");
    await expect(card.locator("textarea")).toHaveValue("");
  });
});
