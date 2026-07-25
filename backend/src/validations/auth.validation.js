/** @format */

import { z } from "zod";

/* ============================
    Register Validation
============================ */

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  email: z.string().email("Invalid email format"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

/* ============================
    Login Validation
============================ */

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),

  password: z.string().min(6, "Password is required"),
});

/* ============================
    Change Password Validation
============================ */

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(6, "Old password is required"),

  newPassword: z.string().min(6, "New password must be at least 6 characters"),
});

/* ============================
    Refresh Token Validation
============================ */

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(10, "Refresh token is required"),
});

/* ============================
    Update Profile Validation
============================ */

export const updateProfileSchema = z.object({

  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .optional(),


  email: z
    .string()
    .email("Invalid email format")
    .optional(),


  avatar: z
    .string()
    .optional(),

});