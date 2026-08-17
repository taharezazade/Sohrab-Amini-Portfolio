/** @format */

import { z } from "zod";

export const createPortfolioImageSchema = z.object({
  portfolioId: z.string().trim().min(1, "شناسه نمونه‌کار الزامی است."),
  image: z.string().trim().min(1, "تصویر الزامی است."),
  alt: z.string().trim().optional().nullable(),
  order: z.coerce.number().int().min(0).default(0),
});

export const updatePortfolioImageSchema = z.object({
  image: z.string().trim().min(1, "تصویر الزامی است.").optional(),
  alt: z.string().trim().optional().nullable(),
  order: z.coerce.number().int().min(0).optional(),
});

export const updatePortfolioImageOrderSchema = z.object({
  order: z.coerce.number().int().min(0),
});
