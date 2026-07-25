/** @format */

import { Router } from "express";

import dashboardController from "../controllers/dashboard.controller.js";

const router = Router();

/* ============================
    Admin Dashboard Routes
============================ */

/*
    Get Dashboard Statistics.
*/
router.get("/stats", dashboardController.getDashboardStats);

/*
    Get Dashboard Overview
*/
router.get("/overview", dashboardController.getOverview);

/*
    Get Recent Activities
*/
router.get("/activities", dashboardController.getRecentActivities);

export default router;
