/** @format */

import contactService from "../services/contact.service.js";

class ContactController {
  /* =========================================================
     Get Contact
  ========================================================= */

  async getContact(req, res, next) {
    try {
      const response = await contactService.getContact();

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     Get Contact By ID
  ========================================================= */

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const response = await contactService.getContactById(id);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     Create Contact
  ========================================================= */

  async create(req, res, next) {
    try {
      const response = await contactService.createContact(req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     Update Contact
  ========================================================= */

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const response = await contactService.updateContact(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     Upsert Contact
  ========================================================= */

  async upsert(req, res, next) {
    try {
      const response = await contactService.upsertContact(req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     Delete Contact
  ========================================================= */

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const response = await contactService.deleteContact(id);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     Exists
  ========================================================= */

  async exists(req, res, next) {
    try {
      const response = await contactService.exists();

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     Count
  ========================================================= */

  async count(req, res, next) {
    try {
      const response = await contactService.count();

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     Update Image
  ========================================================= */

  async updateImage(req, res, next) {
    try {
      const { id } = req.params;

      const response = await contactService.updateImage(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default new ContactController();
