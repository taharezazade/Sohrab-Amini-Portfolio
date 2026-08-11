/** @format */

import prisma from "../config/prisma.js";

class AboutRepository {
  /* =========================================================
     Find About
  ========================================================= */

  async find() {
    return await prisma.about.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  /* =========================================================
     Find About By ID
  ========================================================= */

  async findById(id) {
    return await prisma.about.findUnique({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     Create About
  ========================================================= */

  async create(data) {
    return await prisma.about.create({
      data: {
        title: data.title,
        description: data.description,
        birthYear: data.birthYear ?? null,
        location: data.location ?? null,
        experience: data.experience ?? null,
        image: data.image ?? null,
      },
    });
  }

  /* =========================================================
     Update About
  ========================================================= */

  async update(id, data) {
    return await prisma.about.update({
      where: {
        id,
      },
      data: {
        ...(data.title !== undefined && {
          title: data.title,
        }),

        ...(data.description !== undefined && {
          description: data.description,
        }),

        ...(data.birthYear !== undefined && {
          birthYear: data.birthYear,
        }),

        ...(data.location !== undefined && {
          location: data.location,
        }),

        ...(data.experience !== undefined && {
          experience: data.experience,
        }),

        ...(data.image !== undefined && {
          image: data.image,
        }),
      },
    });
  }

  /* =========================================================
     Upsert About
     Singleton
  ========================================================= */

  async upsert(data) {
    const about = await this.find();

    if (about) {
      return await this.update(about.id, data);
    }

    return await this.create(data);
  }

  /* =========================================================
     Delete About
  ========================================================= */

  async delete(id) {
    return await prisma.about.delete({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     Exists
  ========================================================= */

  async exists() {
    const about = await prisma.about.findFirst({
      select: {
        id: true,
      },
    });

    return Boolean(about);
  }

  /* =========================================================
     Count
  ========================================================= */

  async count() {
    return await prisma.about.count();
  }

  /* =========================================================
     Update Image
  ========================================================= */

  async updateImage(id, image) {
    return await prisma.about.update({
      where: {
        id,
      },
      data: {
        image,
      },
    });
  }

  /* =========================================================
     Clear Image
  ========================================================= */

  async clearImage(id) {
    return await prisma.about.update({
      where: {
        id,
      },
      data: {
        image: null,
      },
    });
  }
}

export default new AboutRepository();
