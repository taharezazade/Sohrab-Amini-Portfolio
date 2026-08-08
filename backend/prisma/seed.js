/** @format */

import "dotenv/config";

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

      displayName: "سهراب امینی",

      firstName: "سهراب",

      lastName: "امینی",

      bio: "توسعه دهنده حرفه‌ای وردپرس و PHP Backend Developer",
    },

    create: {
      username: process.env.ADMIN_USERNAME || "sohrabadmin",

      email: process.env.ADMIN_EMAIL || "admin@sohrabamini.dev",

      password: hashedPassword,

      displayName: "سهراب امینی",

      firstName: "سهراب",

      lastName: "امینی",

      bio: "توسعه دهنده حرفه‌ای وردپرس، PHP و سیستم‌های اختصاصی وب",

      role: "ADMIN",
    },
  });

  console.log("✅ Admin seeded");

  ////////////////////////////////////////////////////////////
  // HERO
  ////////////////////////////////////////////////////////////

  const hero = await prisma.hero.findFirst();

  if (!hero) {
    await prisma.hero.create({
      data: {
        title: "توسعه دهنده حرفه‌ای وردپرس",

        subtitle: "طراحی سایت، توسعه وردپرس و برنامه‌نویسی PHP",

        description:
          "طراحی قالب اختصاصی وردپرس، توسعه افزونه، ساخت سیستم‌های اختصاصی PHP، بهینه‌سازی سرعت و افزایش امنیت وب‌سایت‌ها.",

        image: "/uploads/hero/hero.webp",

        resume: "/uploads/hero/Sohrab-Amini-Resume.pdf",

        isActive: true,

        primaryButtonText: "مشاهده خدمات",

        primaryButtonLink: "#services",

        secondaryButtonText: "ارتباط با من",

        secondaryButtonLink: "#contact",

        seoTitle: "سهراب امینی | توسعه دهنده وردپرس و PHP",

        seoDescription:
          "طراحی و توسعه سایت‌های وردپرسی، افزونه اختصاصی و سیستم‌های PHP",
      },
    });
  }

  console.log("✅ Hero seeded");

  ////////////////////////////////////////////////////////////
  // ABOUT
  ////////////////////////////////////////////////////////////

  const about = await prisma.about.findFirst();

  if (!about) {
    await prisma.about.create({
      data: {
        title: "درباره من",

        description:
          "من سهراب امینی هستم، توسعه دهنده وردپرس و PHP Backend. در زمینه طراحی قالب اختصاصی وردپرس، توسعه افزونه، REST API، بهینه‌سازی دیتابیس، افزایش امنیت و رفع مشکلات فنی پروژه‌های وب فعالیت می‌کنم.",

        birthYear: 1381,

        location: "تهران، ایران",

        experience: 5,

        image: "/uploads/about/about.webp",
      },
    });
  }

  console.log("✅ About seeded");
  ////////////////////////////////////////////////////////////
  // SERVICES
  ////////////////////////////////////////////////////////////

  const servicesCount = await prisma.service.count();

  if (!servicesCount) {
    await prisma.service.createMany({
      data: [
        {
          title: "توسعه قالب اختصاصی وردپرس",

          shortDescription:
            "طراحی و توسعه قالب‌های اختصاصی وردپرس بر اساس نیازهای کسب‌وکار.",

          description:
            "طراحی و توسعه قالب‌های کاملاً اختصاصی وردپرس با معماری تمیز، عملکرد بالا، امنیت، سئو و قابلیت توسعه.",

          icon: "Code",

          category: "توسعه وردپرس",

          technologies: [
            "WordPress",
            "PHP",
            "HTML5",
            "CSS3",
            "JavaScript",
            "MySQL",
          ],

          features: [
            "توسعه قالب اختصاصی",
            "طراحی ریسپانسیو",
            "بهینه سازی سئو",
            "کدنویسی استاندارد",
            "عملکرد بالا",
          ],

          color: "primary",

          order: 1,

          isActive: true,
        },

        {
          title: "توسعه افزونه اختصاصی وردپرس",

          shortDescription:
            "ساخت افزونه‌های اختصاصی و افزودن قابلیت‌های پیشرفته به وردپرس.",

          description:
            "توسعه افزونه‌های امن و مقیاس‌پذیر وردپرس با قابلیت‌های اختصاصی، REST API و معماری حرفه‌ای بک‌اند.",

          icon: "ProgrammingArrow",

          category: "توسعه افزونه",

          technologies: ["PHP", "WordPress", "MySQL", "REST API", "JavaScript"],

          features: [
            "ساخت افزونه اختصاصی",
            "اتصال REST API",
            "توسعه پنل مدیریت",
            "کدنویسی امن",
            "معماری قابل توسعه",
          ],

          color: "accent",

          order: 2,

          isActive: true,
        },

        {
          title: "بهینه سازی سرعت وب سایت",

          shortDescription: "افزایش سرعت سایت و بهبود عملکرد کلی وب سایت.",

          description:
            "تحلیل و بهینه سازی سرعت سایت با استفاده از کش، بهینه سازی دیتابیس، فشرده سازی تصاویر و Core Web Vitals.",

          icon: "Flash",

          category: "بهینه سازی",

          technologies: ["WordPress", "PHP", "MySQL", "Nginx", "Apache"],

          features: [
            "بهینه سازی کش",
            "بهینه سازی دیتابیس",
            "بهینه سازی تصاویر",
            "Lazy Loading",
            "بهبود Core Web Vitals",
          ],

          color: "warning",

          order: 3,

          isActive: true,
        },

        {
          title: "امنیت وردپرس",

          shortDescription:
            "محافظت از سایت در برابر آسیب‌پذیری‌ها و حملات امنیتی.",

          description:
            "پیاده سازی استانداردهای امنیتی وردپرس شامل سخت‌سازی امنیت، مدیریت دسترسی، رفع آسیب‌پذیری‌ها و جلوگیری از حملات رایج.",

          icon: "ShieldSecurity",

          category: "امنیت",

          technologies: ["WordPress", "PHP", "Apache", "Nginx"],

          features: [
            "سخت سازی امنیت",
            "تنظیم فایروال",
            "مدیریت دسترسی",
            "رفع مشکلات امنیتی",
            "مانیتورینگ امنیت",
          ],

          color: "error",

          order: 4,

          isActive: true,
        },

        {
          title: "توسعه بک‌اند با PHP",

          shortDescription:
            "ساخت سیستم‌های اختصاصی بک‌اند و راهکارهای دیتابیس.",

          description:
            "توسعه سیستم‌های بک‌اند مقیاس‌پذیر با PHP، MySQL و REST API با تمرکز بر عملکرد و نگهداری آسان.",

          icon: "Driver2",

          category: "بک‌اند",

          technologies: ["PHP", "MySQL", "REST API", "Git", "Nginx"],

          features: [
            "توسعه بک‌اند",
            "طراحی دیتابیس",
            "ساخت API",
            "بهینه سازی Query",
            "مدیریت داده",
          ],

          color: "info",

          order: 5,

          isActive: true,
        },

        {
          title: "رفع خطا و عیب یابی",

          shortDescription: "تحلیل و حل مشکلات پیچیده وردپرس و PHP.",

          description:
            "بررسی پروژه‌های موجود، شناسایی مشکلات فنی و افزایش پایداری، سرعت و کیفیت کد.",

          icon: "Setting4",

          category: "دیباگ",

          technologies: ["PHP", "WordPress", "MySQL", "Git"],

          features: [
            "رفع باگ",
            "بهینه سازی کد",
            "تحلیل خطا",
            "بهبود عملکرد",
            "افزایش پایداری سیستم",
          ],

          color: "success",

          order: 6,

          isActive: true,
        },

        {
          title: "مشاوره فنی پروژه",

          shortDescription:
            "ارائه راهنمایی تخصصی برای پروژه‌های طراحی و توسعه وب.",

          description:
            "کمک به انتخاب معماری مناسب، تکنولوژی‌های مورد نیاز و استراتژی توسعه برای پروژه‌های موفق.",

          icon: "Cpu",

          category: "مشاوره",

          technologies: ["PHP", "WordPress", "MySQL", "Git", "Nginx"],

          features: [
            "تحلیل پروژه",
            "انتخاب تکنولوژی",
            "طراحی معماری",
            "استراتژی فنی",
            "نقشه راه توسعه",
          ],

          color: "neutral",

          order: 7,

          isActive: true,
        },
      ],
    });
  }

  console.log("✅ Services seeded");
  ////////////////////////////////////////////////////////////
  // PORTFOLIO
  ////////////////////////////////////////////////////////////

  const portfolioCount = await prisma.portfolio.count();

  if (!portfolioCount) {
    await prisma.portfolio.create({
      data: {
        title: "وب سایت شرکتی وردپرس",

        slug: "corporate-wordpress-website",

        description:
          "طراحی و توسعه وب سایت شرکتی اختصاصی وردپرس شامل توسعه قالب، برنامه نویسی PHP، بهینه سازی MySQL، افزایش امنیت، REST API و بهبود عملکرد.",

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

              alt: "صفحه اصلی",

              order: 0,
            },

            {
              image: "/uploads/portfolio/corporate-dashboard.webp",

              alt: "پنل مدیریت",

              order: 1,
            },
          ],
        },
      },
    });
  }

  console.log("✅ Portfolio seeded");

  ////////////////////////////////////////////////////////////
  // CONTACT
  ////////////////////////////////////////////////////////////

  const contact = await prisma.contact.findFirst();

  if (!contact) {
    await prisma.contact.create({
      data: {
        phone: "+98xxxxxxxxxx",

        whatsapp: "+98xxxxxxxxxx",

        image: "/uploads/contact/contact.webp",
      },
    });
  }

  console.log("✅ Contact seeded");
  ////////////////////////////////////////////////////////////
  // SETTINGS
  ////////////////////////////////////////////////////////////

  const setting = await prisma.setting.findFirst();

  if (!setting) {
    await prisma.setting.create({
      data: {
        //////////////////////////////////////////////////////
        // GENERAL
        //////////////////////////////////////////////////////

        siteName: "سهراب امینی",

        siteTitle: "سهراب امینی | توسعه دهنده حرفه‌ای وردپرس و PHP",

        description:
          "سهراب امینی، توسعه دهنده حرفه‌ای وردپرس و PHP با تخصص در طراحی قالب اختصاصی وردپرس، توسعه افزونه، برنامه نویسی بک‌اند، بهینه سازی سرعت و امنیت وب سایت.",

        //////////////////////////////////////////////////////
        // CONTACT
        //////////////////////////////////////////////////////

        phone: "+98xxxxxxxxxx",

        email: "sohrabamini@example.com",

        //////////////////////////////////////////////////////
        // BRANDING
        //////////////////////////////////////////////////////

        logo: "/uploads/settings/logo.webp",

        favicon: "/uploads/settings/favicon.ico",

        //////////////////////////////////////////////////////
        // SEO
        //////////////////////////////////////////////////////

        metaTitle: "توسعه دهنده حرفه‌ای وردپرس | سهراب امینی",

        metaDescription:
          "خدمات تخصصی طراحی سایت وردپرس، توسعه افزونه، برنامه نویسی PHP، بهینه سازی سرعت و امنیت وب سایت.",

        keywords:
          "وردپرس, برنامه نویسی PHP, طراحی سایت, توسعه افزونه وردپرس, بهینه سازی سایت",

        canonicalUrl: "https://sohrabamini.dev",

        //////////////////////////////////////////////////////
        // SOCIAL
        //////////////////////////////////////////////////////

        instagram: "",

        linkedin: "",

        github: "",

        telegram: "",

        twitter: "",

        whatsapp: "",

        //////////////////////////////////////////////////////
        // SECURITY
        //////////////////////////////////////////////////////

        maintenanceMode: false,

        twoFactor: false,

        allowRegistration: false,
      },
    });
  }

  console.log("✅ Settings seeded");

  ////////////////////////////////////////////////////////////
  // FINAL MESSAGE
  ////////////////////////////////////////////////////////////

  console.log("🎉 Database seeded successfully.");
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
