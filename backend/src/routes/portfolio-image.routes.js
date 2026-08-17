/** @format */

import { Router } from "express";

import portfolioImageController from "../controllers/portfolio-image.controller.js";
import {
  uploadSingle,
  uploadMultiple,
  handleUploadError,
} from "../middlewares/upload.middleware.js";

const router = Router();

router.get("/", portfolioImageController.getAll.bind(portfolioImageController));

router.get(
  "/portfolio/:portfolioId",
  portfolioImageController.getByPortfolio.bind(portfolioImageController),
);

router.get(
  "/:imageId",
  portfolioImageController.getById.bind(portfolioImageController),
);

router.post(
  "/portfolio/:portfolioId",
  uploadSingle("image"),
  handleUploadError,
  portfolioImageController.create.bind(portfolioImageController),
);

router.post(
  "/portfolio/:portfolioId/upload",
  uploadMultiple("files", 20),
  handleUploadError,
  portfolioImageController.uploadMany.bind(portfolioImageController),
);

router.put(
  "/:imageId",
  uploadSingle("image"),
  handleUploadError,
  portfolioImageController.update.bind(portfolioImageController),
);

router.patch(
  "/:imageId/order",
  portfolioImageController.updateOrder.bind(portfolioImageController),
);

router.delete(
  "/portfolio/:portfolioId",
  portfolioImageController.deleteByPortfolio.bind(portfolioImageController),
);

router.delete(
  "/:imageId",
  portfolioImageController.delete.bind(portfolioImageController),
);

export default router;
