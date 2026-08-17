/** @format */

import "dotenv/config";

import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* =========================================================
   MAIN
========================================================= */

async function main() {
  console.log("");
  console.log("========================================");
  console.log("🌱 Starting database seed...");
  console.log("========================================");
  console.log("");

  /* =========================================================
     ADMIN
  ========================================================= */

  const adminEmail = process.env.ADMIN_EMAIL || "admin@sohrabamini.dev";

  const adminUsername = process.env.ADMIN_USERNAME || "sohrabadmin";

  const adminPassword = process.env.ADMIN_PASSWORD || "Admin123456";

  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  await prisma.admin.upsert({
    where: {
      email: adminEmail,
    },

    update: {
      username: adminUsername,
      password: hashedPassword,

      displayName: "سهراب امینی",

      firstName: "سهراب",
      lastName: "امینی",

      bio: "توسعه دهنده حرفه‌ای وردپرس، PHP و سیستم‌های اختصاصی وب",
    },

    create: {
      username: adminUsername,
      email: adminEmail,

      password: hashedPassword,

      displayName: "سهراب امینی",

      firstName: "سهراب",
      lastName: "امینی",

      bio: "توسعه دهنده حرفه‌ای وردپرس، PHP و سیستم‌های اختصاصی وب",

      role: "ADMIN",
    },
  });

  console.log("✅ Admin seeded");

  /* =========================================================
     HERO
  ========================================================= */

  const existingHero = await prisma.hero.findFirst();

  if (!existingHero) {
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

  /* =========================================================
     ABOUT
  ========================================================= */

  const existingAbout = await prisma.about.findFirst();

  if (!existingAbout) {
    await prisma.about.create({
      data: {
        title: "درباره من",

        description:
          "من سهراب امینی هستم، توسعه دهنده وردپرس و PHP Backend. در زمینه طراحی قالب اختصاصی وردپرس، توسعه افزونه، REST API، بهینه‌سازی دیتابیس، افزایش امنیت و رفع مشکلات فنی پروژه‌های وب فعالیت می‌کنم.",

        birthYear: 1381,

        location: "تهران، ایران",

        experience: 5,
      },
    });
  }

  console.log("✅ About seeded");

  /* =========================================================
     SERVICES
  ========================================================= */

  const servicesCount = await prisma.service.count();

  if (servicesCount === 0) {
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

  /* =========================================================
     PORTFOLIO
  ========================================================= */

  const portfolioProjects = [
    {
      title: "ندای مهر امید",

      slug: "nedayemehromid",

      description:
        "وب‌سایت شرکتی با طراحی مدرن، ساختار اختصاصی و پنل مدیریت ساده برای معرفی خدمات و ارتباط با مشتریان.",

      thumbnail: "/uploads/portfolio/nedayemehromid.webp",

      projectUrl: "https://nedayemehromid.ir",

      githubUrl: null,

      category: "شرکتی",

      features: [
        "طراحی اختصاصی",
        "پنل مدیریت",
        "طراحی ریسپانسیو",
        "بهینه سازی سرعت",
      ],

      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],

      featured: true,

      order: 1,

      status: "PUBLISHED",

      images: [
        {
          image: "/uploads/portfolio/nedayemehromid.webp",

          alt: "وب‌سایت ندای مهر امید",

          order: 0,
        },
      ],
    },

    {
      title: "ایران توتون",

      slug: "irantobaccoex",

      description:
        "طراحی وب‌سایت شرکتی با تمرکز بر معرفی محصولات، خدمات و ایجاد پنل مدیریت قابل توسعه.",

      thumbnail: "/uploads/portfolio/irantobaccoex.webp",

      projectUrl: "https://irantobaccoex.com",

      githubUrl: null,

      category: "تجاری",

      features: ["معرفی محصولات", "پنل مدیریت", "طراحی ریسپانسیو"],

      technologies: ["WordPress", "PHP", "MySQL", "REST API"],

      featured: false,

      order: 2,

      status: "PUBLISHED",

      images: [
        {
          image: "/uploads/portfolio/irantobaccoex.webp",

          alt: "وب‌سایت ایران توتون",

          order: 0,
        },
      ],
    },

    {
      title: "بلک کلوز",

      slug: "blackclothes",

      description:
        "طراحی فروشگاه اینترنتی با تمرکز بر رابط کاربری مدرن، سرعت بالا و فرآیند خرید آسان.",

      thumbnail: "/uploads/portfolio/blackclothes.webp",

      projectUrl: "https://blackclothes.ir",

      githubUrl: null,

      category: "فروشگاهی",

      features: [
        "فروشگاه اینترنتی",
        "سبد خرید",
        "طراحی ریسپانسیو",
        "بهینه سازی سرعت",
      ],

      technologies: ["WooCommerce", "WordPress", "PHP", "CSS3"],

      featured: false,

      order: 3,

      status: "PUBLISHED",

      images: [
        {
          image: "/uploads/portfolio/blackclothes.webp",

          alt: "فروشگاه بلک کلوز",

          order: 0,
        },
      ],
    },

    {
      title: "سهند برش",

      slug: "sahandboresh",

      description: "وب‌سایت شرکتی برای معرفی خدمات، تجهیزات و پروژه‌های صنعتی.",

      thumbnail: "/uploads/portfolio/sahandboresh.webp",

      projectUrl: "https://sahandboresh.com",

      githubUrl: null,

      category: "صنعتی",

      features: ["معرفی خدمات", "معرفی تجهیزات", "نمونه پروژه‌ها"],

      technologies: ["WordPress", "PHP", "MySQL"],

      featured: false,

      order: 4,

      status: "PUBLISHED",

      images: [
        {
          image: "/uploads/portfolio/sahandboresh.webp",

          alt: "وب‌سایت سهند برش",

          order: 0,
        },
      ],
    },

    {
      title: "جهان چرم",

      slug: "jahan-charm",

      description:
        "طراحی فروشگاه اینترنتی با تمرکز بر نمایش حرفه‌ای محصولات و افزایش نرخ تبدیل.",

      thumbnail: "/uploads/portfolio/jahancharm.webp",

      projectUrl: "https://jahan-charm.ir",

      githubUrl: null,

      category: "فروشگاهی",

      features: [
        "فروشگاه اینترنتی",
        "نمایش حرفه‌ای محصولات",
        "طراحی ریسپانسیو",
      ],

      technologies: ["WooCommerce", "WordPress", "PHP"],

      featured: false,

      order: 5,

      status: "PUBLISHED",

      images: [
        {
          image: "/uploads/portfolio/jahancharm.webp",

          alt: "فروشگاه جهان چرم",

          order: 0,
        },
      ],
    },

    {
      title: "آهنگری منتظری",

      slug: "ahangarimontazeri",

      description:
        "طراحی وب‌سایت اختصاصی برای معرفی خدمات و نمونه پروژه‌های صنعتی.",

      thumbnail: "/uploads/portfolio/ahangarimontazeri.webp",

      projectUrl: "https://ahangarimontazeri.ir",

      githubUrl: null,

      category: "شرکتی",

      features: ["معرفی خدمات", "نمونه پروژه‌های صنعتی", "طراحی اختصاصی"],

      technologies: ["WordPress", "PHP", "MySQL"],

      featured: false,

      order: 6,

      status: "PUBLISHED",

      images: [
        {
          image: "/uploads/portfolio/ahangarimontazeri.webp",

          alt: "وب‌سایت آهنگری منتظری",

          order: 0,
        },
      ],
    },

    {
      title: "کیمیا پژوهان",

      slug: "kimiapajoohan",

      description:
        "طراحی وب‌سایت مدرن جهت معرفی خدمات، تجهیزات و فعالیت‌های پژوهشی.",

      thumbnail: "/uploads/portfolio/kimiapajoohan.webp",

      projectUrl: "https://kimiapajoohan.com",

      githubUrl: null,

      category: "آزمایشگاهی",

      features: ["معرفی خدمات", "معرفی تجهیزات", "طراحی مدرن"],

      technologies: ["WordPress", "PHP", "JavaScript"],

      featured: false,

      order: 7,

      status: "PUBLISHED",

      images: [
        {
          image: "/uploads/portfolio/kimiapajoohan.webp",

          alt: "وب‌سایت کیمیا پژوهان",

          order: 0,
        },
      ],
    },
  ];

  for (const project of portfolioProjects) {
    const existingPortfolio = await prisma.portfolio.findUnique({
      where: {
        slug: project.slug,
      },
    });

    if (!existingPortfolio) {
      await prisma.portfolio.create({
        data: {
          title: project.title,

          slug: project.slug,

          description: project.description,

          thumbnail: project.thumbnail,

          projectUrl: project.projectUrl,

          githubUrl: project.githubUrl,

          category: project.category,

          features: project.features,

          technologies: project.technologies,

          featured: project.featured,

          order: project.order,

          status: project.status,

          images: {
            create: project.images,
          },
        },
      });
    }
  }

  console.log("✅ Portfolio seeded");

  /* =========================================================
     CONTACT
  ========================================================= */

  const existingContact = await prisma.contact.findFirst();

  if (!existingContact) {
    await prisma.contact.create({
      data: {
        phone: "+98xxxxxxxxxx",

        whatsapp: "+98xxxxxxxxxx",

        image: "/uploads/contact/contact.webp",
      },
    });
  }

  console.log("✅ Contact seeded");

  /* =========================================================
     SETTINGS
  ========================================================= */

  const existingSetting = await prisma.setting.findFirst();

  if (!existingSetting) {
    await prisma.setting.create({
      data: {
        siteName: "سهراب امینی",

        siteTitle: "سهراب امینی | توسعه دهنده حرفه‌ای وردپرس و PHP",

        description:
          "سهراب امینی، توسعه دهنده حرفه‌ای وردپرس و PHP با تخصص در طراحی قالب اختصاصی وردپرس، توسعه افزونه، برنامه نویسی بک‌اند، بهینه سازی سرعت و امنیت وب سایت.",

        phone: "+98xxxxxxxxxx",

        email: "sohrabamini@example.com",

        logo: "/uploads/settings/logo.webp",

        favicon: "/uploads/settings/favicon.ico",

        metaTitle: "توسعه دهنده حرفه‌ای وردپرس | سهراب امینی",

        metaDescription:
          "خدمات تخصصی طراحی سایت وردپرس، توسعه افزونه، برنامه نویسی PHP، بهینه سازی سرعت و امنیت وب سایت.",

        keywords:
          "وردپرس, برنامه نویسی PHP, طراحی سایت, توسعه افزونه وردپرس, بهینه سازی سایت",

        canonicalUrl: "https://sohrabamini.dev",

        instagram: "",
        linkedin: "",
        github: "",
        telegram: "",
        twitter: "",
        whatsapp: "",

        maintenanceMode: false,

        twoFactor: false,

        allowRegistration: false,
      },
    });
  }

  console.log("✅ Settings seeded");

  /* =========================================================
     FINAL
  ========================================================= */

  console.log("");
  console.log("========================================");
  console.log("🎉 Database seeded successfully!");
  console.log("========================================");
  console.log("");
}

/* =========================================================
   EXECUTE
========================================================= */

main()
  .catch((error) => {
    console.error("");
    console.error("========================================");
    console.error("❌ Seed failed");
    console.error("========================================");
    console.error("");

    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
