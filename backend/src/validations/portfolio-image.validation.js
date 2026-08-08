/** @format */

import { z } from "zod";

/* ============================
   Params
============================ */

export const portfolioImageParamsSchema = z.object({
  id: z.string().min(1),
});

/* ============================
   Create Image
============================ */

export const createPortfolioImageSchema = z.object({
  image: z.string().trim().min(1, "Image path is required."),

  alt: z.string().trim().max(255).optional().nullable(),

  order: z.number().int().nonnegative().optional(),
});

/* ============================
   Update Image
============================ */

export const updatePortfolioImageSchema = createPortfolioImageSchema.partial();

/* ============================
   Update Order
============================ */

export const portfolioImageOrderSchema = z.object({
  order: z.number().int().nonnegative(),
});
