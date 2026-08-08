/** @format */

import { Router } from "express";

import portfolioController from "../controllers/portfolio.controller.js";

const router = Router();

/* ============================
   Public Routes
============================ */

/*
    Get All Portfolios

    GET
    /api/portfolio
*/

router.get("/", portfolioController.getAll);

/*
    Get Published Portfolios

    GET
    /api/portfolio/published
*/

router.get("/published", portfolioController.getPublished);

/*
    Get Featured Portfolios

    GET
    /api/portfolio/featured
*/

router.get("/featured", portfolioController.getFeatured);

/*
    Get Portfolio By Slug

    GET
    /api/portfolio/slug/:slug
*/

router.get("/slug/:slug", portfolioController.getBySlug);

/*
    Get Portfolio By ID

    GET
    /api/portfolio/:id
*/

router.get("/:id", portfolioController.getById);

/* ============================
   Admin Routes
============================ */

/*
    Create Portfolio

    POST
    /api/portfolio
*/

router.post("/", portfolioController.create);

/*
    Update Portfolio

    PUT
    /api/portfolio/:id
*/

router.put("/:id", portfolioController.update);

/*
    Delete Portfolio

    DELETE
    /api/portfolio/:id
*/

router.delete("/:id", portfolioController.delete);

/*
    Update Portfolio Status

    PATCH
    /api/portfolio/:id/status

    Body:

    {
      "status": "PUBLISHED"
    }
*/

router.patch("/:id/status", portfolioController.updateStatus);

/*
    Toggle Featured

    PATCH
    /api/portfolio/:id/featured

    Body:

    {
      "featured": true
    }
*/

router.patch("/:id/featured", portfolioController.toggleFeatured);

/*
    Update Portfolio Order

    PATCH
    /api/portfolio/:id/order

    Body:

    {
      "order": 1
    }
*/

router.patch("/:id/order", portfolioController.updateOrder);

export default router;
