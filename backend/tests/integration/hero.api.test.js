/** @format */

import { describe, it, expect } from "vitest";
import request from "supertest";

import app from "../../src/app.js";
import prisma from "../../src/config/prisma.js";

describe("Hero API Integration", () => {
  let hero;

  /* =========================================================
     GET HERO
  ========================================================= */

  it("GET /api/hero should return Hero from database", async () => {
    const response = await request(app).get("/api/hero").expect(200);

    expect(response.body.success).toBe(true);

    const data = response.body.data;

    expect(data).toBeDefined();
    expect(data.id).toBeDefined();

    expect(typeof data.title).toBe("string");
    expect(typeof data.subtitle).toBe("string");
    expect(typeof data.description).toBe("string");
    expect(typeof data.image).toBe("string");

    hero = data;
  });

  /* =========================================================
     DATABASE CONSISTENCY
  ========================================================= */

  it("API Hero should match Prisma Hero", async () => {
    const response = await request(app).get("/api/hero").expect(200);

    const apiHero = response.body.data;

    const databaseHero = await prisma.hero.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });

    expect(databaseHero).not.toBeNull();

    expect(apiHero.id).toBe(databaseHero.id);

    expect(apiHero.title).toBe(databaseHero.title);

    expect(apiHero.subtitle).toBe(databaseHero.subtitle);

    expect(apiHero.description).toBe(databaseHero.description);

    expect(apiHero.image).toBe(databaseHero.image);
  });

  /* =========================================================
     UPDATE HERO
  ========================================================= */

  it("PUT /api/hero should update Hero", async () => {
    const current =
      hero || (await request(app).get("/api/hero").expect(200)).body.data;

    const newDescription = `TEST HERO DESCRIPTION ${Date.now()} - Sohrab Amini`;

    const payload = {
      title: current.title,
      subtitle: current.subtitle,
      description: newDescription,
      image: current.image,

      resume: current.resume ?? null,

      primaryButtonText: current.primaryButtonText ?? null,

      primaryButtonLink: current.primaryButtonLink ?? null,

      secondaryButtonText: current.secondaryButtonText ?? null,

      secondaryButtonLink: current.secondaryButtonLink ?? null,

      seoTitle: current.seoTitle ?? null,

      seoDescription: current.seoDescription ?? null,

      isActive: current.isActive ?? true,
    };

    const response = await request(app)
      .put("/api/hero")
      .send(payload)
      .expect(200);

    expect(response.body.success).toBe(true);

    expect(response.body.data.description).toBe(newDescription);
  });

  /* =========================================================
     VERIFY UPDATE
  ========================================================= */

  it("GET /api/hero should return the updated description", async () => {
    const response = await request(app).get("/api/hero").expect(200);

    expect(response.body.data.description).toContain("TEST HERO DESCRIPTION");
  });

  /* =========================================================
     DATABASE VERIFY
  ========================================================= */

  it("updated Hero should exist in PostgreSQL", async () => {
    const response = await request(app).get("/api/hero").expect(200);

    const apiHero = response.body.data;

    const databaseHero = await prisma.hero.findUnique({
      where: {
        id: apiHero.id,
      },
    });

    expect(databaseHero).not.toBeNull();

    expect(databaseHero.description).toBe(apiHero.description);
  });
});
