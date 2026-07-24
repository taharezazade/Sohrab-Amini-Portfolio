/** @format */

import { z } from "zod";

const phoneRegex = /^(\+98|0)?9\d{9}$/;

const phone = z
  .string({
    required_error: "Phone number is required.",
  })
  .trim()
  .regex(phoneRegex, "Invalid phone number.");

const whatsapp = z
  .string({
    required_error: "WhatsApp number is required.",
  })
  .trim()
  .regex(phoneRegex, "Invalid WhatsApp number.");

const email = z
  .string()
  .trim()
  .email("Invalid email.")
  .optional()
  .or(z.literal(""));

const address = z.string().trim().max(300).optional().or(z.literal(""));

const workingHours = z.string().trim().max(150).optional().or(z.literal(""));

const id = z.string().cuid("Invalid Contact ID.");

////////////////////////////////////////////////////////////

export const createContactSchema = z.object({
  phone,
  whatsapp,
  email,
  address,
  workingHours,
});

////////////////////////////////////////////////////////////

export const updateContactSchema = createContactSchema;

////////////////////////////////////////////////////////////

export const contactParamsSchema = z.object({
  id,
});
