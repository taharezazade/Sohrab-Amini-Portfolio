/** @format */

import { z } from "zod";

/* =========================================
   Common Fields
========================================= */

const title = z
  .string({
    required_error: "Title is required.",
  })
  .trim()
  .min(3)
  .max(120);

const slug = z
  .string({
    required_error: "Slug is required.",
  })
  .trim()
  .toLowerCase()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format.");

const description = z
  .string({
    required_error: "Description is required.",
  })
  .trim()
  .min(20)
  .max(5000);

const thumbnail = z
  .string({
    required_error: "Thumbnail is required.",
  })
  .trim()
  .min(1);

const projectUrl = z
  .string()
  .trim()
  .url("Invalid project URL.")
  .optional()
  .or(z.literal(""));

const githubUrl = z
  .string()
  .trim()
  .url("Invalid GitHub URL.")
  .optional()
  .or(z.literal(""));

const category = z
  .string({
    required_error: "Category is required.",
  })
  .trim()
  .min(2)
  .max(100);

const technologies = z
  .array(z.string().trim().min(1))
  .min(1, "At least one technology is required.");

const featured = z.boolean().optional();

const order = z.number().int().min(0).optional();

const status = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);

const id = z.string().cuid("Invalid Portfolio ID.");

const images = z
  .array(
    z.object({
      image: z.string().min(1),
      alt: z.string().optional().or(z.literal("")),
      order: z.number().int().min(0).optional(),
    }),
  )
  .optional();

////////////////////////////////////////////////////////////

export const createPortfolioSchema = z.object({
  title,
  slug,
  description,
  thumbnail,
  projectUrl,
  githubUrl,
  category,
  technologies,
  featured,
  order,
  status,
  images,
});

////////////////////////////////////////////////////////////

export const updatePortfolioSchema = createPortfolioSchema;

////////////////////////////////////////////////////////////

export const portfolioParamsSchema = z.object({
  id,
});

////////////////////////////////////////////////////////////

export const toggleFeaturedSchema = z.object({
  featured: z.boolean(),
});

////////////////////////////////////////////////////////////

export const changePortfolioStatusSchema = z.object({
  status,
});
