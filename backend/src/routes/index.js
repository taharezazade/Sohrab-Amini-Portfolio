/** @format */

import { Router } from "express";

import authRoutes from "./auth.routes.js";
import heroRoutes from "./hero.routes.js";
import aboutRoutes from "./about.routes.js";
import servicesRoutes from "./services.routes.js";

import portfolioRoutes from "./portfolio.routes.js";
import portfolioImageRoutes from "./portfolio-image.routes.js";

import contactRoutes from "./contact.routes.js";
import settingsRoutes from "./settings.routes.js";

import uploadRoutes from "./upload.routes.js";
import searchRoutes from "./search.routes.js";

const router = Router();

/* =========================================================
   AUTH
========================================================= */

router.use("/auth", authRoutes);

/* =========================================================
   HERO
========================================================= */

router.use("/hero", heroRoutes);

/* =========================================================
   ABOUT
========================================================= */

router.use("/about", aboutRoutes);

/* =========================================================
   SERVICES
========================================================= */

router.use("/services", servicesRoutes);

/* =========================================================
   PORTFOLIO
========================================================= */

router.use("/portfolio", portfolioRoutes);

/*
 * Portfolio image management
 */

router.use("/portfolio-images", portfolioImageRoutes);
/* =========================================================
   CONTACT
========================================================= */

router.use("/contact", contactRoutes);

/* =========================================================
   SETTINGS
========================================================= */

router.use("/settings", settingsRoutes);

/* =========================================================
   UPLOAD
========================================================= */

router.use("/upload", uploadRoutes);

/* =========================================================
   SEARCH
========================================================= */

router.use("/search", searchRoutes);

export default router;
