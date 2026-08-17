/** @format */

import prisma from "../config/prisma.js";

class ContactRepository {
  async find() {
    return prisma.contact.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async findById(id) {
    return prisma.contact.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data) {
    return prisma.contact.create({
      data: {
        phone: data.phone,
        whatsapp: data.whatsapp,
        image: data.image ?? null,
      },
    });
  }

  async update(id, data) {
    return prisma.contact.update({
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

  async upsert(data) {
    const existing = await this.find();

    if (existing) {
      return this.update(existing.id, data);
    }

    return this.create(data);
  }

  async delete(id) {
    return prisma.contact.delete({
      where: {
        id,
      },
    });
  }

  async exists() {
    const contact = await prisma.contact.findFirst({
      select: {
        id: true,
      },
    });

    return Boolean(contact);
  }

  async count() {
    return prisma.contact.count();
  }

  async updatePhone(id, phone) {
    return prisma.contact.update({
      where: {
        id,
      },

      data: {
        phone,
      },
    });
  }

  async updateWhatsapp(id, whatsapp) {
    return prisma.contact.update({
      where: {
        id,
      },

      data: {
        whatsapp,
      },
    });
  }

  async updateImage(id, image) {
    return prisma.contact.update({
      where: {
        id,
      },

      data: {
        image: image ?? null,
      },
    });
  }

  async clearImage(id) {
    return prisma.contact.update({
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
