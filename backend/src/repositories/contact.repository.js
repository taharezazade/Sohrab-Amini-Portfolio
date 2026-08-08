/** @format */

import prisma from "../config/prisma.js";

class ContactRepository {
  /* =========================================================
     Find Contact
  ========================================================= */

  async find() {
    return await prisma.contact.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  /* =========================================================
     Find Contact By ID
  ========================================================= */

  async findById(id) {
    return await prisma.contact.findUnique({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     Create Contact
  ========================================================= */

  async create(data) {
    return await prisma.contact.create({
      data: {
        phone: data.phone,
        whatsapp: data.whatsapp,
        image: data.image ?? null,
      },
    });
  }

  /* =========================================================
     Update Contact
  ========================================================= */

  async update(id, data) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data: {
        ...(data.phone !== undefined && {
          phone: data.phone,
        }),

        ...(data.whatsapp !== undefined && {
          whatsapp: data.whatsapp,
        }),

        ...(data.image !== undefined && {
          image: data.image,
        }),
      },
    });
  }

  /* =========================================================
     Upsert Contact
  ========================================================= */

  async upsert(data) {
    const contact = await this.find();

    if (contact) {
      return await this.update(contact.id, data);
    }

    return await this.create(data);
  }

  /* =========================================================
     Delete Contact
  ========================================================= */

  async delete(id) {
    return await prisma.contact.delete({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     Exists
  ========================================================= */

  async exists() {
    const contact = await prisma.contact.findFirst({
      select: {
        id: true,
      },
    });

    return Boolean(contact);
  }

  /* =========================================================
     Count
  ========================================================= */

  async count() {
    return await prisma.contact.count();
  }

  /* =========================================================
     Update Phone
  ========================================================= */

  async updatePhone(id, phone) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data: {
        phone,
      },
    });
  }

  /* =========================================================
     Update WhatsApp
  ========================================================= */

  async updateWhatsapp(id, whatsapp) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data: {
        whatsapp,
      },
    });
  }

  /* =========================================================
     Update Image
  ========================================================= */

  async updateImage(id, image) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data: {
        image: image ?? null,
      },
    });
  }

  /* =========================================================
     Clear Image
  ========================================================= */

  async clearImage(id) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data: {
        image: null,
      },
    });
  }
}

export default new ContactRepository();
