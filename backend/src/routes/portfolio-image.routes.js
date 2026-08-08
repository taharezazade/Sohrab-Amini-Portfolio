/** @format */

import { Router } from "express";

import portfolioImageController from "../controllers/portfolio-image.controller.js";

import { uploadSingle } from "../middlewares/upload.middleware.js";

const router = Router();

/* ============================
   Portfolio Images
============================ */

/*
    Add Portfolio Image

    POST
    /api/portfolio/:portfolioId/images

    Content-Type:
    multipart/form-data

    Fields:

    file
    alt
    order
*/

router.post(
  "/:portfolioId/images",
  uploadSingle("file"),
  portfolioImageController.create,
);

/*
    Get Portfolio Images

    GET
    /api/portfolio/:portfolioId/images
*/

router.get("/:portfolioId/images", portfolioImageController.getAll);

/*
    Count Portfolio Images

    GET
    /api/portfolio/:portfolioId/images/count
*/

router.get("/:portfolioId/images/count", portfolioImageController.count);

/*
    Delete All Portfolio Images

    DELETE
    /api/portfolio/:portfolioId/images
*/

router.delete(
  "/:portfolioId/images",
  portfolioImageController.deleteByPortfolio,
);

/* ============================
   Single Image
============================ */

/*
    Get Single Image

    GET
    /api/portfolio/images/:id
*/

router.get("/images/:id", portfolioImageController.getById);

/*
    Update Image

    PUT
    /api/portfolio/images/:id
*/

router.put("/images/:id", portfolioImageController.update);

/*
    Update Image Order

    PATCH
    /api/portfolio/images/:id/order
*/

router.patch("/images/:id/order", portfolioImageController.updateOrder);

/*
    Delete Image

    DELETE
    /api/portfolio/images/:id
*/

router.delete("/images/:id", portfolioImageController.delete);

export default router;
