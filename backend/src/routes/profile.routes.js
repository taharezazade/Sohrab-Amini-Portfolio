/** @format */

import { Router } from "express";

import profileController from "../controllers/profile.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

import upload from "../middlewares/upload.middleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/", profileController.getProfile);

router.put("/", upload.single("image"), profileController.updateProfile);

router.patch("/password", profileController.changePassword);

router.delete("/image", profileController.removeImage);

export default router;
