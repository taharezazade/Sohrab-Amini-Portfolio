/** @format */

import contactRepository from "../repositories/contact.repository.js";

import {
  createContactSchema,
  updateContactSchema,
  contactParamsSchema,
  contactImageSchema,
  contactPhoneSchema,
  contactWhatsappSchema,
} from "../validations/contact.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class ContactService {
  async getContact() {
    const contact = await contactRepository.find();

    console.log("🔎 REPOSITORY CONTACT:", contact);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const response = new ApiResponse(
      200,
      contact,
      "Contact information fetched successfully.",
    );

    console.log("📤 CONTACT API RESPONSE:", response);

    return response;
  }

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

  async createContact(payload) {
    const data = createContactSchema.parse(payload);

    const exists = await contactRepository.exists();

    if (exists) {
      throw new ApiError(409, "Contact information already exists.");
    }

    const contact = await contactRepository.create({
      phone: data.phone,
      whatsapp: data.whatsapp,
      image: data.image ?? null,
    });

    return new ApiResponse(
      201,
      contact,
      "Contact information created successfully.",
    );
  }

  async updateContact(id, payload) {
    contactParamsSchema.parse({
      id,
    });

    const data = updateContactSchema.parse(payload);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const updated = await contactRepository.update(id, data);

    return new ApiResponse(
      200,
      updated,
      "Contact information updated successfully.",
    );
  }

  /*
   * THIS IS THE IMPORTANT METHOD
   *
   * PUT /api/contact
   *
   * If a Contact exists:
   *   UPDATE
   *
   * If no Contact exists:
   *   CREATE
   */

  async upsertContact(payload) {
    const data = updateContactSchema.parse(payload);

    let contact = await contactRepository.find();

    if (contact) {
      contact = await contactRepository.update(contact.id, {
        ...(data.phone !== undefined && {
          phone: data.phone,
        }),

        ...(data.whatsapp !== undefined && {
          whatsapp: data.whatsapp,
        }),

        ...(data.image !== undefined && {
          image: data.image,
        }),
      });

      return new ApiResponse({
        statusCode: 200,
        data: contact,
        message: "Contact information fetched successfully.",
      });
    }

    /*
     * No Contact exists.
     * First save must create it.
     */

    if (!data.phone || !data.whatsapp) {
      throw new ApiError(
        400,
        "Phone and WhatsApp are required when creating contact information.",
      );
    }

    contact = await contactRepository.create({
      phone: data.phone,
      whatsapp: data.whatsapp,
      image: data.image ?? null,
    });

    return new ApiResponse(
      201,
      contact,
      "Contact information created successfully.",
    );
  }

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

  async updateImage(id, payload) {
    contactParamsSchema.parse({
      id,
    });

    const data = contactImageSchema.parse(payload);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const updated = await contactRepository.updateImage(id, data.image ?? null);

    return new ApiResponse(200, updated, "Contact image updated successfully.");
  }

  async clearImage(id) {
    contactParamsSchema.parse({
      id,
    });

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const updated = await contactRepository.clearImage(id);

    return new ApiResponse(200, updated, "Contact image cleared successfully.");
  }

  async updatePhone(id, payload) {
    contactParamsSchema.parse({
      id,
    });

    const { phone } = contactPhoneSchema.parse(payload);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const updated = await contactRepository.updatePhone(id, phone);

    return new ApiResponse(200, updated, "Contact phone updated successfully.");
  }

  async updateWhatsapp(id, payload) {
    contactParamsSchema.parse({
      id,
    });

    const { whatsapp } = contactWhatsappSchema.parse(payload);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new ApiError(404, "Contact information not found.");
    }

    const updated = await contactRepository.updateWhatsapp(id, whatsapp);

    return new ApiResponse(
      200,
      updated,
      "Contact WhatsApp updated successfully.",
    );
  }
}

export default new ContactService();
