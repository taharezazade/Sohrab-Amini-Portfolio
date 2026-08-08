/** @format */

import { z } from "zod";

/* =========================================================
   Normalize Iranian Phone Number
========================================================= */

const normalizePhone = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  let phone = value.trim();

  // Remove spaces, dashes and parentheses
  phone = phone.replace(/[\s\-()]/g, "");

  // Convert +98XXXXXXXXXX to 0XXXXXXXXXX
  if (phone.startsWith("+98")) {
    phone = `0${phone.slice(3)}`;
  }

  // Convert 0098XXXXXXXXXX to 0XXXXXXXXXX
  if (phone.startsWith("0098")) {
    phone = `0${phone.slice(4)}`;
  }

  // Convert 9XXXXXXXXX to 09XXXXXXXXX
  if (/^9\d{9}$/.test(phone)) {
    phone = `0${phone}`;
  }

  return phone;
};

/* =========================================================
   Phone Schema
========================================================= */

const phoneSchema = z
  .string({
    required_error: "Phone number is required.",
  })
  .trim()
  .transform(normalizePhone)
  .refine((value) => /^09\d{9}$/.test(value), {
    message: "Invalid phone number.",
  });

/* =========================================================
   WhatsApp Schema
========================================================= */

const whatsappSchema = z
  .string({
    required_error: "WhatsApp number is required.",
  })
  .trim()
  .transform(normalizePhone)
  .refine((value) => /^09\d{9}$/.test(value), {
    message: "Invalid WhatsApp number.",
  });

/* =========================================================
   Image Schema
========================================================= */

const imageSchema = z
  .string()
  .trim()
  .max(500, "Image path is too long.")
  .optional()
  .nullable()
  .or(z.literal(""));

/* =========================================================
   Contact ID
========================================================= */

const idSchema = z.string().cuid("Invalid Contact ID.");

/* =========================================================
   Create Contact
========================================================= */

export const createContactSchema = z.object({
  phone: phoneSchema,

  whatsapp: whatsappSchema,

  image: imageSchema,
});

/* =========================================================
   Update Contact
========================================================= */

export const updateContactSchema = z.object({
  phone: phoneSchema.optional(),

  whatsapp: whatsappSchema.optional(),

  image: imageSchema,
});

/* =========================================================
   Contact Params
========================================================= */

export const contactParamsSchema = z.object({
  id: idSchema,
});

/* =========================================================
   Contact Image
========================================================= */

export const contactImageSchema = z.object({
  image: imageSchema,
});
