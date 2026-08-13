/** @format */

import { test, expect } from "@playwright/test";

test("Admin Hero update should be reflected in public DOM", async ({
  page,
  request,
}) => {
  const newDescription = `توضیحات تست Hero ${Date.now()}`;

  /*
   * 1. Get current Hero
   */
  const getResponse = await request.get("http://localhost:5000/api/hero");

  expect(getResponse.ok()).toBe(true);

  const getJson = await getResponse.json();

  const currentHero = getJson.data;

  expect(currentHero).toBeTruthy();

  /*
   * 2. Update Hero through API
   */
  const updateResponse = await request.put("http://localhost:5000/api/hero", {
    data: {
      title: currentHero.title,
      subtitle: currentHero.subtitle,

      description: newDescription,

      image: currentHero.image,

      resume: currentHero.resume,

      primaryButtonText: currentHero.primaryButtonText,

      primaryButtonLink: currentHero.primaryButtonLink,

      secondaryButtonText: currentHero.secondaryButtonText,

      secondaryButtonLink: currentHero.secondaryButtonLink,

      seoTitle: currentHero.seoTitle,

      seoDescription: currentHero.seoDescription,

      isActive: currentHero.isActive,
    },
  });

  expect(updateResponse.ok()).toBe(true);

  /*
   * 3. Verify API
   */
  const verifyResponse = await request.get("http://localhost:5000/api/hero");

  expect(verifyResponse.ok()).toBe(true);

  const verifyJson = await verifyResponse.json();

  expect(verifyJson.data.description).toBe(newDescription);

  /*
   * 4. Open public website
   */
  await page.goto("http://localhost:5173", {
    waitUntil: "networkidle",
  });

  /*
   * 5. Find Hero
   */
  const hero = page.locator("#hero");

  await expect(hero).toBeVisible();

  /*
   * 6. Verify DOM
   */
  await expect(hero).toContainText(newDescription);
});
