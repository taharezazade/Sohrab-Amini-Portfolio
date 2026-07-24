/** @format */

import prisma from "../config/prisma.js";

class ContactRepository {
  /* ============================
      Get Contact
  ============================ */

  async find() {
    return await prisma.contact.findFirst();
  }

  /* ============================
      Get By ID
  ============================ */

  async findById(id) {
    return await prisma.contact.findUnique({
      where: {
        id,
      },
    });
  }

  /* ============================
      Create
  ============================ */

  async create(data) {
    return await prisma.contact.create({
      data,
    });
  }

  /* ============================
      Update
  ============================ */

  async update(id, data) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data,
    });
  }

  /* ============================
      Create Or Update
  ============================ */

  async upsert(data) {
    const contact = await prisma.contact.findFirst();

    if (contact) {
      return await prisma.contact.update({
        where: {
          id: contact.id,
        },
        data,
      });
    }

    return await prisma.contact.create({
      data,
    });
  }

  /* ============================
      Delete
  ============================ */

  async delete(id) {
    return await prisma.contact.delete({
      where: {
        id,
      },
    });
  }

  /* ============================
      Exists
  ============================ */

  async exists() {
    const contact = await prisma.contact.findFirst({
      select: {
        id: true,
      },
    });

    return !!contact;
  }

  /* ============================
      Count
  ============================ */

  async count() {
    return await prisma.contact.count();
  }

  /* ============================
      Update Phone
  ============================ */

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

  /* ============================
      Update WhatsApp
  ============================ */

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

  /* ============================
      Update Email
  ============================ */

  async updateEmail(id, email) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data: {
        email,
      },
    });
  }

  /* ============================
      Update Address
  ============================ */

  async updateAddress(id, address) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data: {
        address,
      },
    });
  }

  /* ============================
      Update Working Hours
  ============================ */

  async updateWorkingHours(id, workingHours) {
    return await prisma.contact.update({
      where: {
        id,
      },
      data: {
        workingHours,
      },
    });
  }
}

export default new ContactRepository();
