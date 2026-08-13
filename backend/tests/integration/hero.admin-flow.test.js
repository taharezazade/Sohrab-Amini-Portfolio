/** @format */

import { describe, it, expect } from "vitest";

import request from "supertest";

import app from "../../src/app.js";

describe("Hero Admin → API Flow", () => {
  it("should accept a complete Hero payload from Admin", async () => {
    const getResponse = await request(app).get("/api/hero").expect(200);

    const currentHero = getResponse.body.data;

    expect(currentHero).toBeDefined();

    const payload = {
      title: currentHero.title,

      subtitle: currentHero.subtitle,

      description:
        "توضیحات جدید سهراب امینی برای تست اتصال پنل مدیریت به API و Frontend.",

      image: currentHero.image,

      resume: currentHero.resume ?? null,

      primaryButtonText: currentHero.primaryButtonText ?? null,

      primaryButtonLink: currentHero.primaryButtonLink ?? null,

      secondaryButtonText: currentHero.secondaryButtonText ?? null,

      secondaryButtonLink: currentHero.secondaryButtonLink ?? null,

      seoTitle: currentHero.seoTitle ?? null,

      seoDescription: currentHero.seoDescription ?? null,

      isActive: currentHero.isActive ?? true,
    };

    const updateResponse = await request(app)
      .put("/api/hero")
      .send(payload)
      .expect(200);

    expect(updateResponse.body.success).toBe(true);

    expect(updateResponse.body.data.description).toBe(payload.description);
  });
});
