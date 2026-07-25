/** @format */

import { Router } from "express";

import authController from "../controllers/auth.controller.js";

const router = Router();

/* ============================
    Authentication Routes
============================ */

/*
    Register User
*/
router.post("/register", authController.register);

/*
    Login User
*/
router.post("/login", authController.login);

/*
    Logout User
*/
router.post("/logout", authController.logout);

/*
    Refresh Access Token
*/
router.post("/refresh-token", authController.refreshToken);

/*
    Get Current User

    نیازمند auth.middleware.js
*/
router.get("/me", authController.me);

export default router;
