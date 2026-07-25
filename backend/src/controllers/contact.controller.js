/** @format */

import contactService from "../services/contact.service.js";

class ContactController {
  /* ============================
      Create Contact Message
  ============================ */

  async createMessage(req, res, next) {
    try {
      const message = await contactService.createMessage(req.body);

      return res.status(201).json({
        success: true,

        message: "Contact message sent successfully",

        data: message,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get All Messages
  ============================ */

  async getAllMessages(req, res, next) {
    try {
      const messages = await contactService.getAllMessages();

      return res.status(200).json({
        success: true,

        message: "Contact messages fetched successfully",

        data: messages,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Single Message
  ============================ */

  async getMessageById(req, res, next) {
    try {
      const { id } = req.params;

      const message = await contactService.getMessageById(id);

      return res.status(200).json({
        success: true,

        message: "Contact message fetched successfully",

        data: message,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Mark Message As Read
  ============================ */

  async markAsRead(req, res, next) {
    try {
      const { id } = req.params;

      const message = await contactService.markAsRead(id);

      return res.status(200).json({
        success: true,

        message: "Message marked as read",

        data: message,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete Message
  ============================ */

  async deleteMessage(req, res, next) {
    try {
      const { id } = req.params;

      const result = await contactService.deleteMessage(id);

      return res.status(200).json({
        success: true,

        message: "Contact message deleted successfully",

        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ContactController();
