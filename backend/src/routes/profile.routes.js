/** @format */

import { Router } from "express";
import validateMiddleware from "../middlewares/validate.middleware.js";
import profileController from "../controllers/profile.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

import upload from "../middlewares/upload.middleware.js";

import {
  updateProfileSchema,
  changePasswordSchema,
} from "../validations/profile.validation.js";

const router = Router();

router.use(authMiddleware);

/**
 * Get Profile
 */
router.get("/", profileController.getProfile);

/**
 * Update Profile
 */
router.put(
  "/",
  upload.single("image"),
  validateMiddleware(updateProfileSchema),
  profileController.updateProfile,
);

/**
 * Change Password
 */
router.patch(
  "/password",
  validateMiddleware(changePasswordSchema),
  profileController.changePassword,
);

/**
 * Remove Profile Image
 */
router.delete("/image", profileController.removeImage);

export default router;
