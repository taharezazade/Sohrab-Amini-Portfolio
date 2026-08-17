/** @format */

import { Router } from "express";

import portfolioController from "../controllers/portfolio.controller.js";
import {
  uploadSingle,
  handleUploadError,
} from "../middlewares/upload.middleware.js";

const router = Router();

/* =========================================================
   PUBLIC
========================================================= */

router.get("/", portfolioController.getAll.bind(portfolioController));

router.get(
  "/published",
  portfolioController.getPublished.bind(portfolioController),
);

router.get(
  "/featured",
  portfolioController.getFeatured.bind(portfolioController),
);

router.get(
  "/slug/:slug",
  portfolioController.getBySlug.bind(portfolioController),
);

router.get("/:id", portfolioController.getById.bind(portfolioController));

/* =========================================================
   ADMIN / CREATE
========================================================= */

router.post(
  "/",
  uploadSingle("thumbnail"),
  handleUploadError,
  portfolioController.create.bind(portfolioController),
);

/* =========================================================
   ADMIN / UPDATE
========================================================= */

router.put(
  "/:id",
  uploadSingle("thumbnail"),
  handleUploadError,
  portfolioController.update.bind(portfolioController),
);

router.patch(
  "/:id/status",
  portfolioController.updateStatus.bind(portfolioController),
);

router.patch(
  "/:id/order",
  portfolioController.updateOrder.bind(portfolioController),
);

router.delete("/:id", portfolioController.delete.bind(portfolioController));

export default router;
