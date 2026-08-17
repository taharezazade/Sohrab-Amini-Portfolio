/** @format */

import CallImage from "../../assets/images/contact/Call.webp";

import {
  CallCalling,
  Whatsapp,
  Clock,
  ShieldTick,
  Flash,
  Messages3,
} from "iconsax-reactjs";

/* =========================================================
   Default Contact Data
========================================================= */

export const contactData = {
  title: "آماده شروع پروژه بعدی شما هستم.",

  subtitle:
    "اگر برای طراحی وب‌سایت، توسعه اختصاصی وردپرس یا اجرای یک پروژه حرفه‌ای به دنبال همکاری با یک توسعه‌دهنده متعهد هستید، کافی است از طریق تماس تلفنی یا واتساپ با من در ارتباط باشید.",

  description:
    "هر پروژه قبل از شروع نیازمند بررسی دقیق، شناخت نیازها و انتخاب بهترین راهکار است. به همین دلیل پیش از شروع همکاری، زمان کافی برای بررسی پروژه شما اختصاص داده می‌شود تا بهترین نتیجه ممکن با توجه به اهداف، بودجه و زمان‌بندی ارائه شود.",

  fallbackImage: CallImage,

  /*
   * IMPORTANT:
   * These are the initial fallback values.
   * API values will replace them when available.
   */

  phone: {
    label: "تماس مستقیم",
    number: "09123884766",
    href: "tel:+989123884766",
    icon: CallCalling,
  },

  whatsapp: {
    label: "واتساپ",
    number: "09123884766",
    href: "https://wa.me/989123884766",
    icon: Whatsapp,
  },

  features: [
    {
      id: 1,
      icon: Clock,
      title: "پاسخگویی سریع",
      description:
        "در کوتاه‌ترین زمان ممکن پیام‌ها و تماس‌های شما بررسی و پاسخ داده می‌شود.",
    },

    {
      id: 2,
      icon: ShieldTick,
      title: "همکاری مطمئن",
      description:
        "شفافیت در روند انجام پروژه، تعهد به زمان‌بندی و کیفیت خروجی در اولویت قرار دارد.",
    },

    {
      id: 3,
      icon: Flash,
      title: "شروع سریع پروژه",
      description:
        "پس از بررسی نیازهای پروژه، فرآیند طراحی و توسعه بدون اتلاف زمان آغاز خواهد شد.",
    },

    {
      id: 4,
      icon: Messages3,
      title: "مشاوره قبل از همکاری",
      description:
        "در صورت نیاز، قبل از شروع پروژه می‌توانید درباره ایده، امکانات و مسیر اجرای آن مشاوره دریافت کنید.",
    },
  ],

  cta: {
    title: "بیایید ایده شما را به یک پروژه حرفه‌ای تبدیل کنیم.",

    description:
      "اگر برای کسب‌وکار یا برند خود به یک وب‌سایت سریع، مدرن و قابل توسعه نیاز دارید، همین حالا از طریق تماس یا واتساپ ارتباط برقرار کنید تا درباره جزئیات پروژه صحبت کنیم.",
  },
};

/* =========================================================
   Normalize Digits
========================================================= */

const normalizeDigits = (value) => {
  if (!value) {
    return "";
  }

  return String(value)
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632));
};

/* =========================================================
   Normalize Phone
========================================================= */

const normalizePhone = (value) => {
  if (!value) {
    return "";
  }

  let phone = normalizeDigits(value)
    .trim()
    .replace(/[\s\-()]/g, "");

  if (phone.startsWith("+98")) {
    phone = `0${phone.slice(3)}`;
  }

  if (phone.startsWith("0098")) {
    phone = `0${phone.slice(4)}`;
  }

  if (/^9\d{9}$/.test(phone)) {
    phone = `0${phone}`;
  }

  return phone;
};

/* =========================================================
   Phone URL
========================================================= */

const createPhoneHref = (phone) => {
  const normalized = normalizePhone(phone);

  if (!normalized) {
    return "";
  }

  return `tel:+98${normalized.replace(/^0/, "")}`;
};

/* =========================================================
   WhatsApp URL
========================================================= */

const createWhatsappHref = (whatsapp) => {
  const normalized = normalizePhone(whatsapp);

  if (!normalized) {
    return "";
  }

  return `https://wa.me/98${normalized.replace(/^0/, "")}`;
};

/* =========================================================
   Contact View Model
========================================================= */

export const createContactViewModel = (contact) => {
  /*
   * Start with fallback values.
   */

  const phone = normalizePhone(contact?.phone) || contactData.phone.number;

  const whatsapp =
    normalizePhone(contact?.whatsapp) || contactData.whatsapp.number;

  return {
    ...contactData,

    id: contact?.id ?? null,

    image: contact?.image || contactData.fallbackImage,

    phone: {
      ...contactData.phone,

      number: phone,

      href: createPhoneHref(phone),
    },

    whatsapp: {
      ...contactData.whatsapp,

      number: whatsapp,

      href: createWhatsappHref(whatsapp),
    },
  };
};
