/** @format */

import contactRepository from "../repositories/contact.repository.js";

import {
  createContactSchema,
  updateContactSchema,
  contactParamsSchema,
  contactImageSchema,
} from "../validations/contact.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class ContactService {
  /* =========================================================
     Get Contact
  ========================================================= */

  async getContact() {
    const contact = await contactRepository.find();

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    return new ApiResponse(
      200,
      contact,
      "Contact information fetched successfully.",
    );
  }

  /* =========================================================
     Get Contact By ID
  ========================================================= */

  async getContactById(id) {
    contactParamsSchema.parse({
      id,
    });

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    return new ApiResponse(
      200,
      contact,
      "Contact information fetched successfully.",
    );
  }

  /* =========================================================
     Create Contact
  ========================================================= */

  async createContact(payload) {
    const data = createContactSchema.parse(payload);

    const exists = await contactRepository.exists();

    if (exists) {
      throw new ApiError(409, "Contact information already exists.");
    }

    const contact = await contactRepository.create({
      phone: data.phone,
      whatsapp: data.whatsapp,
      image: data.image || null,
    });

    return new ApiResponse(
      201,
      contact,
      "Contact information created successfully.",
    );
  }

  /* =========================================================
     Update Contact
  ========================================================= */

  async updateContact(id, payload) {
    contactParamsSchema.parse({
      id,
    });

    const data = updateContactSchema.parse(payload);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const updateData = {};

    if (data.phone !== undefined) {
      updateData.phone = data.phone;
    }

    if (data.whatsapp !== undefined) {
      updateData.whatsapp = data.whatsapp;
    }

    if (data.image !== undefined) {
      updateData.image = data.image || null;
    }

    const updatedContact = await contactRepository.update(id, updateData);

    return new ApiResponse(
      200,
      updatedContact,
      "Contact information updated successfully.",
    );
  }

  /* =========================================================
     Upsert Contact
  ========================================================= */

  async upsertContact(payload) {
    const data = updateContactSchema.parse(payload);

    const existingContact = await contactRepository.find();

    if (existingContact) {
      const updated = await contactRepository.update(existingContact.id, data);

      return new ApiResponse(
        200,
        updated,
        "Contact information updated successfully.",
      );
    }

    const contact = await contactRepository.create({
      phone: data.phone,
      whatsapp: data.whatsapp,
      image: data.image || null,
    });

    return new ApiResponse(
      201,
      contact,
      "Contact information created successfully.",
    );
  }

  /* =========================================================
     Delete Contact
  ========================================================= */

  async deleteContact(id) {
    contactParamsSchema.parse({
      id,
    });

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    await contactRepository.delete(id);

    return new ApiResponse(
      200,
      null,
      "Contact information deleted successfully.",
    );
  }

  /* =========================================================
     Exists
  ========================================================= */

  async exists() {
    const exists = await contactRepository.exists();

    return new ApiResponse(
      200,
      {
        exists,
      },
      "Contact existence checked successfully.",
    );
  }

  /* =========================================================
     Count
  ========================================================= */

  async count() {
    const total = await contactRepository.count();

    return new ApiResponse(
      200,
      {
        total,
      },
      "Contact count fetched successfully.",
    );
  }

  /* =========================================================
     Update Image
  ========================================================= */

  async updateImage(id, payload) {
    contactParamsSchema.parse({
      id,
    });

    const data = contactImageSchema.parse(payload);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const updatedContact = await contactRepository.updateImage(
      id,
      data.image || null,
    );

    return new ApiResponse(
      200,
      updatedContact,
      "Contact image updated successfully.",
    );
  }
}

export default new ContactService();
