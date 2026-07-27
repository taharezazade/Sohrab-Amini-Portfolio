/** @format */

import { describe, expect, it } from "vitest";

import {
  createAboutSchema,
  updateAboutSchema,
  aboutParamsSchema,
} from "../../../src/validations/about.validation.js";

describe("About Validation", () => {
  const validData = {
    title: "About Me",
    description:
      "This is a valid description with more than twenty characters.",
    birthYear: 1381,
    location: "Tehran",
    experience: 5,
    image: "/uploads/about/about.jpg",
  };

  /* ============================
      Create Schema
  ============================ */

  describe("createAboutSchema", () => {
    it("should validate valid data", () => {
      expect(() => createAboutSchema.parse(validData)).not.toThrow();
    });

    it("should reject empty title", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          title: "",
        }),
      ).toThrow();
    });

    it("should reject short title", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          title: "ab",
        }),
      ).toThrow();
    });

    it("should reject empty description", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          description: "",
        }),
      ).toThrow();
    });

    it("should reject short description", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          description: "short",
        }),
      ).toThrow();
    });

    it("should reject invalid birthYear", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          birthYear: 1200,
        }),
      ).toThrow();
    });

    it("should reject invalid location", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          location: "A",
        }),
      ).toThrow();
    });

    it("should reject invalid experience", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          experience: -1,
        }),
      ).toThrow();
    });

    it("should accept empty image", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          image: "",
        }),
      ).not.toThrow();
    });

    it("should accept empty location", () => {
      expect(() =>
        createAboutSchema.parse({
          ...validData,
          location: "",
        }),
      ).not.toThrow();
    });

    it("should accept optional fields", () => {
      expect(() =>
        createAboutSchema.parse({
          title: validData.title,
          description: validData.description,
        }),
      ).not.toThrow();
    });
  });

  /* ============================
      Update Schema
  ============================ */

  describe("updateAboutSchema", () => {
    it("should validate valid update data", () => {
      expect(() => updateAboutSchema.parse(validData)).not.toThrow();
    });

    it("should reject invalid title", () => {
      expect(() =>
        updateAboutSchema.parse({
          ...validData,
          title: "aa",
        }),
      ).toThrow();
    });

    it("should reject invalid description", () => {
      expect(() =>
        updateAboutSchema.parse({
          ...validData,
          description: "short",
        }),
      ).toThrow();
    });

    it("should reject invalid birthYear", () => {
      expect(() =>
        updateAboutSchema.parse({
          ...validData,
          birthYear: 1600,
        }),
      ).toThrow();
    });

    it("should reject invalid experience", () => {
      expect(() =>
        updateAboutSchema.parse({
          ...validData,
          experience: 100,
        }),
      ).toThrow();
    });
  });

  /* ============================
      Params Schema
  ============================ */

  describe("aboutParamsSchema", () => {
    it("should validate valid id", () => {
      expect(() =>
        aboutParamsSchema.parse({
          id: "cmf4m3szb0000x9x8u7v6w5q4",
        }),
      ).not.toThrow();
    });

    it("should reject invalid id", () => {
      expect(() =>
        aboutParamsSchema.parse({
          id: "123",
        }),
      ).toThrow();
    });

    it("should reject missing id", () => {
      expect(() => aboutParamsSchema.parse({})).toThrow();
    });
  });
});
