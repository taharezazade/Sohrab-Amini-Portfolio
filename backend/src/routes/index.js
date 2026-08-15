/** @format */

import { Router } from "express";

import authRoutes from "./auth.routes.js";
import heroRoutes from "./hero.routes.js";
import aboutRoutes from "./about.routes.js";
import servicesRoutes from "./services.routes.js";
import portfolioRoutes from "./portfolio.routes.js";
import contactRoutes from "./contact.routes.js";
import settingsRoutes from "./settings.routes.js";
import uploadRoutes from "./upload.routes.js";
import searchRoutes from "./search.routes.js";

const router = Router();

/* =========================================================
   AUTH
   Base: /api/auth
========================================================= */

router.use("/auth", authRoutes);

/* =========================================================
   HERO
   Base: /api/hero
========================================================= */

router.use("/hero", heroRoutes);

/* =========================================================
   ABOUT
   Base: /api/about
========================================================= */

router.use("/about", aboutRoutes);

/* =========================================================
   SERVICES
   Base: /api/services
========================================================= */

router.use("/services", servicesRoutes);

/* =========================================================
   PORTFOLIO
   Base: /api/portfolio
========================================================= */

router.use("/portfolio", portfolioRoutes);

/* =========================================================
   CONTACT
   Base: /api/contact
========================================================= */

router.use("/contact", contactRoutes);

/* =========================================================
   SETTINGS
   Base: /api/settings
========================================================= */

router.use("/settings", settingsRoutes);

/* =========================================================
   UPLOAD
   Base: /api/upload
========================================================= */

router.use("/upload", uploadRoutes);

/* =========================================================
   SEARCH HEADER DASHBOARD
========================================================= */
router.use("/search", searchRoutes);

export default router;
