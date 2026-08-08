/** @format */

import {
  Code,
  Brush2,
  ShieldSecurity,
  Flash,
  ProgrammingArrow,
  Driver2,
  Setting4,
  Cpu,
} from "iconsax-reactjs";

export const services = [
  
  {
    id: 1,

    icon: Code,

    title: "طراحی قالب اختصاصی وردپرس",

    shortDescription:
      "طراحی و توسعه قالب‌های کاملاً اختصاصی بر اساس نیاز کسب‌وکار، بدون استفاده از قالب‌های آماده.",

    description:
      "هر پروژه از پایه و مطابق استانداردهای روز توسعه داده می‌شود. ساختار کدنویسی تمیز، قابلیت توسعه، امنیت بالا و رعایت اصول سئو باعث می‌شود وب‌سایت علاوه بر ظاهر حرفه‌ای، عملکرد قابل اعتمادی نیز داشته باشد.",

    features: [
      "طراحی کاملاً اختصاصی",
      "بدون وابستگی به قالب‌های آماده",
      "کدنویسی استاندارد",
      "کاملاً ریسپانسیو",
      "سازگار با سئو",
      "سرعت بارگذاری بالا",
    ],
    category: "Customization",

    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],

    color: "primary",
  },

  {
    id: 2,

    icon: Brush2,

    title: "شخصی‌سازی قالب‌های وردپرس",

    shortDescription:
      "سفارشی‌سازی حرفه‌ای قالب‌های پریمیوم و اورجینال مطابق نیاز برند و کسب‌وکار.",

    description:
      "اگر از قالب‌های آماده استفاده می‌کنید، تمامی بخش‌های قالب قابل بازطراحی، توسعه و بهینه‌سازی خواهد بود تا نتیجه نهایی کاملاً منحصربه‌فرد و مطابق هویت برند باشد.",

    features: [
      "ویرایش کامل صفحات",
      "تغییر ساختار قالب",
      "افزودن امکانات جدید",
      "بهینه‌سازی رابط کاربری",
      "حذف بخش‌های اضافی",
      "هماهنگی کامل با برند",
    ],

    category: "Customization",

    technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "jQuery"],
    color: "secondary",
  },

  {
    id: 3,

    icon: Flash,

    title: "بهینه‌سازی سرعت وب‌سایت",

    shortDescription:
      "افزایش سرعت بارگذاری و بهبود عملکرد سایت برای تجربه کاربری بهتر و سئو.",

    description:
      "سرعت یکی از مهم‌ترین عوامل موفقیت یک وب‌سایت است. تمامی بخش‌های سایت بررسی شده و با استفاده از تکنیک‌های استاندارد، زمان بارگذاری به حداقل می‌رسد.",

    features: [
      "بهینه‌سازی تصاویر",
      "Caching",
      "Lazy Loading",
      "کاهش درخواست‌ها",
      "بهینه‌سازی فایل‌ها",
      "بهبود Core Web Vitals",
    ],

    category: "Performance",

    technologies: ["WordPress", "Apache", "Nginx", "JavaScript"],
    color: "warning",
  },

  {
    id: 4,

    icon: ShieldSecurity,

    title: "امنیت وردپرس",

    shortDescription:
      "افزایش امنیت وب‌سایت و محافظت در برابر حملات و آسیب‌پذیری‌های رایج.",

    description:
      "پیاده‌سازی لایه‌های امنیتی، جلوگیری از نفوذ، کاهش آسیب‌پذیری‌ها و ایمن‌سازی کامل وب‌سایت برای حفظ اطلاعات و پایداری سیستم.",

    features: [
      "سخت‌سازی امنیت",
      "محافظت در برابر حملات",
      "تنظیم فایروال",
      "مدیریت دسترسی کاربران",
      "حذف آسیب‌پذیری‌ها",
      "پایش امنیت",
    ],

    category: "Security",

    technologies: ["WordPress", "PHP", "Apache", "Nginx"],
    color: "error",
  },

  {
    id: 5,

    icon: ProgrammingArrow,

    title: "توسعه افزونه و سیستم اختصاصی",

    shortDescription:
      "طراحی افزونه‌های اختصاصی و توسعه قابلیت‌های سفارشی برای وردپرس.",

    description:
      "در صورت نیاز به امکاناتی که در افزونه‌های موجود وجود ندارد، افزونه‌های اختصاصی متناسب با نیاز پروژه طراحی و توسعه داده می‌شوند.",

    features: [
      "افزونه اختصاصی",
      "REST API",
      "پنل مدیریت اختصاصی",
      "قابلیت توسعه",
      "مستندسازی",
      "کدنویسی استاندارد",
    ],

    category: "Plugin Development",

    technologies: ["PHP", "WordPress", "REST API", "MySQL", "JavaScript"],
    color: "accent",
  },

  {
    id: 6,

    icon: Driver2,

    title: "توسعه Backend با PHP",

    shortDescription:
      "پیاده‌سازی سیستم‌های بک‌اند، مدیریت دیتابیس و توسعه سرویس‌های اختصاصی.",

    description:
      "توسعه بخش سرور، مدیریت داده‌ها، طراحی ساختار پایگاه داده و ایجاد ارتباط میان بخش‌های مختلف سیستم با تمرکز بر عملکرد، امنیت و مقیاس‌پذیری.",

    features: [
      "PHP Backend",
      "طراحی Database",
      "MySQL",
      "REST API",
      "مدیریت داده‌ها",
      "بهینه‌سازی Queryها",
    ],

    category: "Backend",

    technologies: ["PHP", "MySQL", "REST API", "Apache", "Nginx", "Git"],
    color: "info",
  },

  {
    id: 7,

    icon: Setting4,

    title: "عیب‌یابی و رفع مشکلات",

    shortDescription:
      "شناسایی، تحلیل و رفع باگ‌های پیچیده در پروژه‌های وردپرسی و PHP.",

    description:
      "بررسی کامل ساختار پروژه، تحلیل مشکلات عملکردی و رفع خطاهای نرم‌افزاری با حفظ کیفیت و پایداری سیستم.",

    features: [
      "رفع باگ",
      "بهبود عملکرد",
      "بهینه‌سازی کد",
      "تحلیل خطاها",
      "اصلاح ساختار",
      "افزایش پایداری",
    ],

    category: "Debugging",

    technologies: ["PHP", "WordPress", "MySQL", "Git"],
    color: "success",
  },

  {
    id: 8,

    icon: Cpu,

    title: "مشاوره فنی و توسعه پروژه",

    shortDescription:
      "همراهی در انتخاب بهترین معماری، تکنولوژی و مسیر توسعه پروژه‌های وب.",

    description:
      "اگر قصد راه‌اندازی یا توسعه یک پروژه جدید را دارید، انتخاب تکنولوژی مناسب، معماری صحیح و برنامه‌ریزی اصولی می‌تواند هزینه و زمان توسعه را به شکل قابل توجهی کاهش دهد.",

    features: [
      "تحلیل نیاز پروژه",
      "انتخاب تکنولوژی",
      "برنامه‌ریزی توسعه",
      "مشاوره زیرساخت",
      "بهبود عملکرد",
      "پشتیبانی فنی",
    ],

    category: "Consulting",

    technologies: ["PHP", "WordPress", "MySQL", "Git", "Apache", "Nginx"],
    color: "neutral",
  },
];
