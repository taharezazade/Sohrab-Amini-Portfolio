/** @format */

import { z } from "zod";

/* =====================================================
    Constants
===================================================== */

export const PROJECT_STATUS = ["DRAFT", "PUBLISHED", "ARCHIVED"];

/* =====================================================
    Helpers
===================================================== */

const urlSchema = z
  .string()
  .trim()
  .url("Invalid URL.")
  .optional()
  .or(z.literal(""))
  .nullable();

const imageSchema = z.string().trim().min(1, "Image is required.");

const slugSchema = z
  .string()
  .trim()
  .min(3, "Slug must contain at least 3 characters.")
  .max(200)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug format is invalid.");

/* =====================================================
    Params
===================================================== */

export const portfolioParamsSchema = z
  .object({
    id: z.string().cuid("Invalid portfolio id."),
  })
  .strict();

/* =====================================================
    Slug Params
===================================================== */

export const portfolioSlugSchema = z
  .object({
    slug: slugSchema,
  })
  .strict();

/* =====================================================
    Create Portfolio
===================================================== */

export const createPortfolioSchema = z
  .object({
    title: z.string().trim().min(3).max(150),

    slug: slugSchema,

    description: z.string().trim().min(10).max(10000),

    thumbnail: imageSchema.optional().nullable(),

    projectUrl: urlSchema,

    githubUrl: urlSchema,

    category: z.string().trim().min(2).max(100),

    technologies: z
      .array(z.string().trim().min(1))
      .max(50)
      .transform((items) => [...new Set(items)])
      .default([]),

    featured: z.boolean().default(false),

    order: z.number().int().min(0).default(0),

    status: z.enum(PROJECT_STATUS).default("PUBLISHED"),
  })
  .strict();

/* =====================================================
    Update Portfolio
===================================================== */

export const updatePortfolioSchema = createPortfolioSchema.partial();

/* =====================================================
    Status
===================================================== */

export const portfolioStatusSchema = z
  .object({
    status: z.enum(PROJECT_STATUS),
  })
  .strict();

/* =====================================================
    Featured
===================================================== */

export const portfolioFeaturedSchema = z
  .object({
    featured: z.boolean(),
  })
  .strict();

/* =====================================================
    Order
===================================================== */

export const portfolioOrderSchema = z
  .object({
    order: z.number().int().min(0),
  })
  .strict();

/* =====================================================
    Portfolio Image
===================================================== */

export const portfolioImageSchema = z
  .object({
    image: imageSchema,

    alt: z.string().trim().max(255).optional().nullable(),

    order: z.number().int().min(0).default(0),
  })
  .strict();

/* =====================================================
    Portfolio Image Order
===================================================== */

export const portfolioImageOrderSchema = z
  .object({
    order: z.number().int().min(0),
  })
  .strict();

/* =====================================================
    Bulk Images
===================================================== */

export const portfolioImagesSchema = z
  .array(portfolioImageSchema)
  .min(1)
  .max(100);
