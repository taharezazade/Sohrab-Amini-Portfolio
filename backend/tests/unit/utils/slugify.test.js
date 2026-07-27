/** @format */

import { describe, expect, it } from "vitest";

import slugify from "../../../src/utils/slug.js";

describe("slugify", () => {
  /* ============================
      Normal Text
  ============================ */

  it("should convert text to slug", () => {
    expect(slugify("Professional WordPress Developer")).toBe(
      "professional-wordpress-developer",
    );
  });

  /* ============================
      Trim Spaces
  ============================ */

  it("should trim leading and trailing spaces", () => {
    expect(slugify("   Custom WordPress Theme Development   ")).toBe(
      "custom-wordpress-theme-development",
    );
  });

  /* ============================
      Multiple Spaces
  ============================ */

  it("should replace multiple spaces with one hyphen", () => {
    expect(slugify("Backend    Development    with    PHP")).toBe(
      "backend-development-with-php",
    );
  });

  /* ============================
      Lowercase
  ============================ */

  it("should convert uppercase letters to lowercase", () => {
    expect(slugify("PHP MySQL REST API")).toBe("php-mysql-rest-api");
  });

  /* ============================
      Remove Special Characters
  ============================ */

  it("should remove special characters", () => {
    expect(slugify("WordPress! @Developer #2026")).toBe(
      "wordpress-developer-2026",
    );
  });

  /* ============================
      Collapse Hyphens
  ============================ */

  it("should collapse multiple hyphens into one", () => {
    expect(slugify("wordpress---backend-----developer")).toBe(
      "wordpress-backend-developer",
    );
  });

  /* ============================
      Empty String
  ============================ */

  it("should return empty string for empty input", () => {
    expect(slugify("")).toBe("");
  });

  /* ============================
      Undefined Input
  ============================ */

  it("should return empty string for undefined", () => {
    expect(slugify()).toBe("");
  });

  /* ============================
      Only Spaces
  ============================ */

  it("should return empty string for whitespace only", () => {
    expect(slugify("      ")).toBe("");
  });

  /* ============================
      Numbers
  ============================ */

  it("should preserve numbers", () => {
    expect(slugify("PHP 8 MySQL 9")).toBe("php-8-mysql-9");
  });

  /* ============================
      Mixed Content
  ============================ */

  it("should generate a clean slug from mixed content", () => {
    expect(slugify("Custom WordPress Theme & Plugin Development 2026")).toBe(
      "custom-wordpress-theme-plugin-development-2026",
    );
  });
});
