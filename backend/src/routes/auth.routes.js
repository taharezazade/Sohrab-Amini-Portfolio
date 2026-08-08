/** @format */

import { Router } from "express";

import authController from "../controllers/auth.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

/* =======================================================
    Public Routes
======================================================= */

/*
    Register Administrator
*/
router.post("/register", authController.register);

/*
    Login
*/
router.post("/login", authController.login);

/*
    Refresh Access Token
*/
router.post("/refresh-token", authController.refreshToken);

/* =======================================================
    Protected Routes
======================================================= */

/*
    Get Current Administrator
*/
router.get("/profile", authMiddleware, authController.me);

/*
    Update Profile
*/
router.put("/profile", authMiddleware, authController.updateProfile);

/*
    Change Password
*/
router.patch("/change-password", authMiddleware, authController.changePassword);

/*
    Logout
*/
router.post("/logout", authMiddleware, authController.logout);

export default router;
