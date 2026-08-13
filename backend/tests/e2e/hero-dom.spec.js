/** @format */

import { test, expect } from "@playwright/test";

test.describe("Hero Public Frontend", () => {
  test("should display Hero data from API", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const hero = page.locator("#hero");

    await expect(hero).toBeVisible();

    /*
     * Hero should contain actual
     * content returned by API.
     */

    await expect(hero).not.toContainText("توضیحات قدیمی");
  });
});
