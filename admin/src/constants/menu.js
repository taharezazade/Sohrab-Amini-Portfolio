/** @format */

import {
  Home,
  User,
  Code,
  Briefcase,
  Message,
  Setting2,
} from "iconsax-reactjs";

import { ROUTES } from "./routes";

export const SIDEBAR_MENU = [
  {
    id: "dashboard",
    title: "داشبورد",
    path: ROUTES.DASHBOARD,
    icon: Home,
  },

  {
    id: "hero",
    title: "هیرو",
    path: ROUTES.HERO,
    icon: User,
  },

  {
    id: "about",
    title: "درباره من",
    path: ROUTES.ABOUT,
    icon: User,
  },

  {
    id: "services",
    title: "خدمات",
    path: ROUTES.SERVICES,
    icon: Code,
  },

  {
    id: "portfolio",
    title: "نمونه کارها",
    path: ROUTES.PORTFOLIO,
    icon: Briefcase,
  },

  {
    id: "contact",
    title: "ارتباطات",
    path: ROUTES.CONTACT,
    icon: Message,
  },

  {
    id: "settings",
    title: "تنظیمات",
    path: ROUTES.SETTINGS,
    icon: Setting2,
  },
];
