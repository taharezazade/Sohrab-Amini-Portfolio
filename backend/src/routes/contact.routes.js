/** @format */

import { Router } from "express";

import contactController from "../controllers/contact.controller.js";

const router = Router();

/* ============================
    Public Routes
============================ */

/*
    Send Contact Message
*/
router.post("/", contactController.createMessage);

/* ============================
    Admin Routes
============================ */

/*
    Get All Contact Messages
*/
router.get("/", contactController.getAllMessages);

/*
    Get Single Message
*/
router.get("/:id", contactController.getMessageById);

/*
    Mark Message As Read
*/
router.patch("/:id/read", contactController.markAsRead);

/*
    Delete Message
*/
router.delete("/:id", contactController.deleteMessage);

export default router;
