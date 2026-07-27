/** @format */

import { describe, expect, it } from "vitest";

import {
  createServiceSchema,
  updateServiceSchema,
  toggleServiceStatusSchema,
  serviceParamsSchema,
} from "../../../src/validations/services.validation.js";

describe("Services Validation", () => {
  const validData = {
    title: "Custom WordPress Development",

    slug: "custom-wordpress-development",

    description:
      "Professional WordPress development including custom themes, plugin development, backend programming, performance optimization, website security, and long-term maintenance.",

    category: "WordPress",

    technologies: [
      "PHP",
      "MySQL",
      "WordPress",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "REST API",
      "Git",
    ],

    features: [
      "Custom Theme Development",
      "Plugin Development",
      "Website Performance Optimization",
      "WordPress Security",
      "REST API Integration",
    ],

    order: 1,

    isActive: true,
  };

  /* ============================
      Create Service
  ============================ */

  describe("createServiceSchema", () => {
    it("should validate valid service data", () => {
      expect(() =>
        createServiceSchema.parse({
          ...validData,
        }),
      ).not.toThrow();
    });

    it("should reject invalid title", () => {
      expect(() =>
        createServiceSchema.parse({
          ...validData,
          title: "ab",
        }),
      ).toThrow();
    });

    it("should reject invalid slug", () => {
      expect(() =>
        createServiceSchema.parse({
          ...validData,
          slug: "Invalid Slug",
        }),
      ).toThrow();
    });

    it("should reject invalid description", () => {
      expect(() =>
        createServiceSchema.parse({
          ...validData,
          description: "short",
        }),
      ).toThrow();
    });

    it("should reject invalid category", () => {
      expect(() =>
        createServiceSchema.parse({
          ...validData,
          category: "",
        }),
      ).toThrow();
    });

    it("should reject empty technologies", () => {
      expect(() =>
        createServiceSchema.parse({
          ...validData,
          technologies: [],
        }),
      ).toThrow();
    });

    it("should reject empty features", () => {
      expect(() =>
        createServiceSchema.parse({
          ...validData,
          features: [],
        }),
      ).toThrow();
    });

    it("should reject negative order", () => {
      expect(() =>
        createServiceSchema.parse({
          ...validData,
          order: -1,
        }),
      ).toThrow();
    });
  });

  /* ============================
      Update Service
  ============================ */

  describe("updateServiceSchema", () => {
    it("should validate update data", () => {
      expect(() => updateServiceSchema.parse(validData)).not.toThrow();
    });

    it("should validate isActive", () => {
      expect(() =>
        updateServiceSchema.parse({
          ...validData,
          isActive: false,
        }),
      ).not.toThrow();
    });

    it("should reject invalid isActive", () => {
      expect(() =>
        updateServiceSchema.parse({
          ...validData,
          isActive: "true",
        }),
      ).toThrow();
    });
  });

  /* ============================
      Toggle Status
  ============================ */

  describe("toggleServiceStatusSchema", () => {
    it("should validate active status", () => {
      expect(() =>
        toggleServiceStatusSchema.parse({
          isActive: true,
        }),
      ).not.toThrow();
    });

    it("should validate inactive status", () => {
      expect(() =>
        toggleServiceStatusSchema.parse({
          isActive: false,
        }),
      ).not.toThrow();
    });

    it("should reject invalid status", () => {
      expect(() =>
        toggleServiceStatusSchema.parse({
          isActive: "true",
        }),
      ).toThrow();
    });

    it("should reject missing status", () => {
      expect(() => toggleServiceStatusSchema.parse({})).toThrow();
    });
  });

  /* ============================
      Params
  ============================ */

  describe("serviceParamsSchema", () => {
    it("should validate valid service id", () => {
      expect(() =>
        serviceParamsSchema.parse({
          id: "cmf4m3szb0000x9x8u7v6w5q4",
        }),
      ).not.toThrow();
    });

    it("should reject invalid service id", () => {
      expect(() =>
        serviceParamsSchema.parse({
          id: "123",
        }),
      ).toThrow();
    });

    it("should reject missing id", () => {
      expect(() => serviceParamsSchema.parse({})).toThrow();
    });
  });
});
