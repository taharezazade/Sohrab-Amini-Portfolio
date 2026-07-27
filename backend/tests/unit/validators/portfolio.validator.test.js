/** @format */

import { describe, expect, it } from "vitest";

import {
  createPortfolioSchema,
  updatePortfolioSchema,
  portfolioParamsSchema,
  toggleFeaturedSchema,
  changePortfolioStatusSchema,
  portfolioFeaturedSchema,
  portfolioOrderSchema,
  portfolioStatusSchema,
} from "../../../src/validations/portfolio.validation.js";

describe("Portfolio Validation", () => {
  const validData = {
    title: "Custom WordPress Website Development",

    slug: "custom-wordpress-website-development",

    description:
      "Professional development of a fully custom WordPress website including custom theme development, backend programming with PHP, database optimization, security hardening, performance optimization, REST API integration, and advanced bug fixing.",

    thumbnail: "/uploads/portfolio/custom-wordpress-website.webp",

    projectUrl: "",

    githubUrl: "",

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
      "Apache",
      "Nginx",
    ],

    featured: true,

    order: 1,

    status: "PUBLISHED",

    images: [
      {
        image: "/uploads/portfolio/homepage.webp",
        alt: "Homepage",
        order: 0,
      },
      {
        image: "/uploads/portfolio/dashboard.webp",
        alt: "Admin Dashboard",
        order: 1,
      },
    ],
  };

  /* ============================
      Create Portfolio
  ============================ */

  describe("createPortfolioSchema", () => {
    it("should validate valid data", () => {
      expect(() => createPortfolioSchema.parse(validData)).not.toThrow();
    });

    it("should reject invalid title", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          title: "ab",
        }),
      ).toThrow();
    });

    it("should reject invalid slug", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          slug: "Invalid Slug",
        }),
      ).toThrow();
    });

    it("should reject invalid description", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          description: "short",
        }),
      ).toThrow();
    });

    it("should reject empty thumbnail", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          thumbnail: "",
        }),
      ).toThrow();
    });

    it("should reject invalid project url", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          projectUrl: "invalid-url",
        }),
      ).toThrow();
    });

    it("should reject invalid github url", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          githubUrl: "github",
        }),
      ).toThrow();
    });

    it("should reject empty technologies", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          technologies: [],
        }),
      ).toThrow();
    });

    it("should reject invalid status", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          status: "ACTIVE",
        }),
      ).toThrow();
    });

    it("should accept empty optional urls", () => {
      expect(() =>
        createPortfolioSchema.parse({
          ...validData,
          projectUrl: "",
          githubUrl: "",
        }),
      ).not.toThrow();
    });

    it("should accept without images", () => {
      const { images, ...data } = validData;

      expect(() => createPortfolioSchema.parse(data)).not.toThrow();
    });
  });

  /* ============================
      Update Portfolio
  ============================ */

  describe("updatePortfolioSchema", () => {
    it("should validate update data", () => {
      expect(() => updatePortfolioSchema.parse(validData)).not.toThrow();
    });

    it("should reject invalid data", () => {
      expect(() =>
        updatePortfolioSchema.parse({
          ...validData,
          slug: "###",
        }),
      ).toThrow();
    });
  });

  /* ============================
      Params
  ============================ */

  describe("portfolioParamsSchema", () => {
    it("should validate cuid", () => {
      expect(() =>
        portfolioParamsSchema.parse({
          id: "cmf4m3szb0000x9x8u7v6w5q4",
        }),
      ).not.toThrow();
    });

    it("should reject invalid cuid", () => {
      expect(() =>
        portfolioParamsSchema.parse({
          id: "123",
        }),
      ).toThrow();
    });
  });

  /* ============================
      Toggle Featured
  ============================ */

  describe("toggleFeaturedSchema", () => {
    it("should validate featured", () => {
      expect(() =>
        toggleFeaturedSchema.parse({
          featured: true,
        }),
      ).not.toThrow();
    });

    it("should reject invalid featured", () => {
      expect(() =>
        toggleFeaturedSchema.parse({
          featured: "true",
        }),
      ).toThrow();
    });
  });

  /* ============================
      Change Status
  ============================ */

  describe("changePortfolioStatusSchema", () => {
    it("should validate status", () => {
      expect(() =>
        changePortfolioStatusSchema.parse({
          status: "DRAFT",
        }),
      ).not.toThrow();
    });

    it("should reject invalid status", () => {
      expect(() =>
        changePortfolioStatusSchema.parse({
          status: "INVALID",
        }),
      ).toThrow();
    });
  });

  /* ============================
      Featured Validation
  ============================ */

  describe("portfolioFeaturedSchema", () => {
    it("should validate featured schema", () => {
      expect(() =>
        portfolioFeaturedSchema.parse({
          isFeatured: false,
        }),
      ).not.toThrow();
    });

    it("should reject invalid featured value", () => {
      expect(() =>
        portfolioFeaturedSchema.parse({
          isFeatured: 1,
        }),
      ).toThrow();
    });
  });

  /* ============================
      Order Validation
  ============================ */

  describe("portfolioOrderSchema", () => {
    it("should validate order list", () => {
      expect(() =>
        portfolioOrderSchema.parse({
          order: [
            {
              id: "portfolio1",
              position: 0,
            },
            {
              id: "portfolio2",
              position: 1,
            },
          ],
        }),
      ).not.toThrow();
    });

    it("should reject empty order list", () => {
      expect(() =>
        portfolioOrderSchema.parse({
          order: [],
        }),
      ).toThrow();
    });

    it("should reject negative position", () => {
      expect(() =>
        portfolioOrderSchema.parse({
          order: [
            {
              id: "1",
              position: -1,
            },
          ],
        }),
      ).toThrow();
    });
  });

  /* ============================
      Portfolio Status Validation
  ============================ */

  describe("portfolioStatusSchema", () => {
    it("should validate portfolio status", () => {
      expect(() =>
        portfolioStatusSchema.parse({
          status: "ARCHIVED",
        }),
      ).not.toThrow();
    });

    it("should reject invalid portfolio status", () => {
      expect(() =>
        portfolioStatusSchema.parse({
          status: "ACTIVE",
        }),
      ).toThrow();
    });

    it("should reject missing status", () => {
      expect(() => portfolioStatusSchema.parse({})).toThrow();
    });
  });
});
