/** @format */

import { Router } from "express";

const router = Router();

/* ===========================
   Health Check
=========================== */

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Sohrab Amini API Routes are working 🚀",
  });
});

/* ===========================
   Feature Routes
=========================== */

import authRoutes from "./auth.routes.js";
import heroRoutes from "./hero.routes.js";
import aboutRoutes from "./about.routes.js";
import servicesRoutes from "./services.routes.js";
import portfolioRoutes from "./portfolio.routes.js";
import contactRoutes from "./contact.routes.js";
import settingsRoutes from "./settings.routes.js";

router.use("/auth", authRoutes);
router.use("/hero", heroRoutes);
router.use("/about", aboutRoutes);
router.use("/services", servicesRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/contact", contactRoutes);
router.use("/settings", settingsRoutes);

export default router;
