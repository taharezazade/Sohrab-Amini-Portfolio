/** @format */

import contactRepository from "../repositories/contact.repository.js";

import {
  createContactSchema,
  updateContactSchema,
  contactParamsSchema,
} from "../validations/contact.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class ContactService {
  /* =========================================
      Get Contact
  ========================================= */

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

  /* =========================================
      Get Contact By ID
  ========================================= */

  async getContactById(id) {
    contactParamsSchema.parse({ id });

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

  /* =========================================
      Create Contact
  ========================================= */

  async createContact(payload) {
    const data = createContactSchema.parse(payload);

    const exists = await contactRepository.exists();

    if (exists) {
      throw new ApiError(409, "Contact information already exists.");
    }

    const contact = await contactRepository.create({
      phone: data.phone,
      whatsapp: data.whatsapp,
      email: data.email,
      address: data.address,
      workingHours: data.workingHours,
    });

    return new ApiResponse(
      201,
      contact,
      "Contact information created successfully.",
    );
  }

  /* =========================================
      Update Contact
  ========================================= */

  async updateContact(id, payload) {
    contactParamsSchema.parse({ id });

    const data = updateContactSchema.parse(payload);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const updatedContact = await contactRepository.update(id, {
      phone: data.phone,
      whatsapp: data.whatsapp,
      email: data.email,
      address: data.address,
      workingHours: data.workingHours,
    });

    return new ApiResponse(
      200,
      updatedContact,
      "Contact information updated successfully.",
    );
  }

  /* =========================================
      Upsert Contact
  ========================================= */

  async upsertContact(payload) {
    const data = updateContactSchema.parse(payload);

    const contact = await contactRepository.upsert({
      phone: data.phone,
      whatsapp: data.whatsapp,
      email: data.email,
      address: data.address,
      workingHours: data.workingHours,
    });

    return new ApiResponse(
      200,
      contact,
      "Contact information saved successfully.",
    );
  }

  /* =========================================
      Delete Contact
  ========================================= */

  async deleteContact(id) {
    contactParamsSchema.parse({ id });

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

  /* =========================================
      Contact Exists
  ========================================= */

  async exists() {
    const exists = await contactRepository.exists();

    return new ApiResponse(
      200,
      { exists },
      "Contact existence checked successfully.",
    );
  }

  /* =========================================
      Contact Count
  ========================================= */

  async count() {
    const total = await contactRepository.count();

    return new ApiResponse(
      200,
      { total },
      "Contact count fetched successfully.",
    );
  }
}

export default new ContactService();
