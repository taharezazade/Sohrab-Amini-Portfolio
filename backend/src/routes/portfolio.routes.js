/** @format */

import { Router } from "express";

import portfolioController from "../controllers/portfolio.controller.js";

const router = Router();

/* ============================
    Public Routes
============================ */

/*
    Get All Portfolios
*/
router.get("/", portfolioController.getAllPortfolios);

/*
    Get Portfolio By Slug
*/
router.get("/slug/:slug", portfolioController.getPortfolioBySlug);

/*
    Get Single Portfolio By ID
*/
router.get("/:id", portfolioController.getPortfolioById);

/* ============================
    Admin Routes
============================ */

/*
    Create Portfolio
*/
router.post("/", portfolioController.createPortfolio);

/*
    Update Portfolio
*/
router.put("/:id", portfolioController.updatePortfolio);

/*
    Delete Portfolio
*/
router.delete("/:id", portfolioController.deletePortfolio);

export default router;
