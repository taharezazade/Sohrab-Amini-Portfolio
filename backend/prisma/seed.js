/** @format */

import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  ////////////////////////////////////////////////////////////
  // ADMIN
  ////////////////////////////////////////////////////////////

  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || "Admin123456",
    12,
  );

  await prisma.admin.upsert({
    where: {
      email: process.env.ADMIN_EMAIL || "admin@sohrabamini.dev",
    },

    update: {
      username: process.env.ADMIN_USERNAME || "sohrabadmin",
      password: hashedPassword,
    },

    create: {
      username: process.env.ADMIN_USERNAME || "sohrabadmin",
      email: process.env.ADMIN_EMAIL || "admin@sohrabamini.dev",
      password: hashedPassword,
    },
  });

  ////////////////////////////////////////////////////////////
  // HERO
  ////////////////////////////////////////////////////////////

  const hero = await prisma.hero.findFirst();

  if (!hero) {
    await prisma.hero.create({
      data: {
        title: "Professional WordPress Developer",

        subtitle: "Custom WordPress Solutions & PHP Backend Development",

        description:
          "I develop custom WordPress themes, plugins, backend systems with PHP, optimize website performance, strengthen security, and build scalable web solutions.",

        image: "/uploads/hero/hero.webp",

        resume: "/uploads/hero/Sohrab-Amini-Resume.pdf",

        isActive: true,
      },
    });
  }

  ////////////////////////////////////////////////////////////
  // ABOUT
  ////////////////////////////////////////////////////////////

  const about = await prisma.about.findFirst();

  if (!about) {
    await prisma.about.create({
      data: {
        title: "About Me",

        description:
          "I'm Sohrab Amini, a professional WordPress and PHP Backend Developer specializing in custom WordPress theme development, plugin development, REST API integration, MySQL optimization, security hardening, performance optimization, and advanced troubleshooting.",

        birthYear: 1381,

        location: "Tehran, Iran",

        experience: 5,

        image: "/uploads/about/about.webp",
      },
    });
  }

  ////////////////////////////////////////////////////////////
  // SERVICES
  ////////////////////////////////////////////////////////////

  const servicesCount = await prisma.service.count();

  if (!servicesCount) {
    await prisma.service.createMany({
      data: [
        {
          title: "Custom WordPress Theme Development",

          slug: "custom-wordpress-theme-development",

          description:
            "Design and develop completely custom WordPress themes from scratch based on business requirements.",

          category: "WordPress",

          technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],

          features: ["Custom Theme", "Responsive Design", "SEO Friendly"],

          order: 1,

          isActive: true,
        },

        {
          title: "Custom Plugin Development",

          slug: "custom-wordpress-plugin-development",

          description:
            "Develop scalable and secure custom plugins tailored to business needs.",

          category: "WordPress",

          technologies: ["PHP", "WordPress", "MySQL"],

          features: [
            "Custom Features",
            "Secure Coding",
            "Performance Optimized",
          ],

          order: 2,

          isActive: true,
        },

        {
          title: "Website Performance Optimization",

          slug: "website-performance-optimization",

          description:
            "Improve loading speed, optimize database queries, configure caching and image optimization.",

          category: "Optimization",

          technologies: ["PHP", "MySQL", "Nginx", "Apache"],

          features: ["Caching", "Image Optimization", "Database Optimization"],

          order: 3,

          isActive: true,
        },
      ],
    });
  }

  ////////////////////////////////////////////////////////////
  // PORTFOLIO
  ////////////////////////////////////////////////////////////

  const portfolioCount = await prisma.portfolio.count();

  if (!portfolioCount) {
    await prisma.portfolio.create({
      data: {
        title: "Corporate WordPress Website",

        slug: "corporate-wordpress-website",

        description:
          "A fully customized corporate WordPress website featuring custom theme development, backend programming with PHP, MySQL optimization, advanced security implementation, REST API integration, and high-performance optimization.",

        thumbnail: "/uploads/portfolio/corporate-wordpress.webp",

        projectUrl: "",

        githubUrl: "",

        category: "WordPress",

        technologies: [
          "PHP",
          "WordPress",
          "MySQL",
          "JavaScript",
          "HTML5",
          "CSS3",
          "REST API",
        ],

        featured: true,

        order: 1,

        status: "PUBLISHED",

        images: {
          create: [
            {
              image: "/uploads/portfolio/corporate-home.webp",

              alt: "Homepage",

              order: 0,
            },

            {
              image: "/uploads/portfolio/corporate-dashboard.webp",

              alt: "Dashboard",

              order: 1,
            },
          ],
        },
      },
    });
  }

  console.log("✅ Database seeded successfully.");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed");
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
