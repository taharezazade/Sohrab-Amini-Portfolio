/** @format */

import { Notification, SearchNormal1, Moon, Sun1 } from "iconsax-reactjs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Breadcrumb from "./Breadcrumb";
import ProfileDropdown from "./ProfileDropdown";

const titles = {
  "/dashboard": "داشبورد",
  "/dashboard/hero": "بخش هیرو",
  "/dashboard/about": "درباره من",
  "/dashboard/services": "خدمات",
  "/dashboard/portfolio": "نمونه‌کارها",
  "/dashboard/contact": "اطلاعات تماس",
  "/dashboard/settings": "تنظیمات سایت",
};

const Header = () => {
  const location = useLocation();

  const currentTitle = titles[location.pathname] || "پنل مدیریت";

  /////////////////////////////////////////////////////////
  // Theme
  /////////////////////////////////////////////////////////

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className='
        fixed
        top-0
        right-0

        z-50

        h-20

        w-full

        bg-base-100/80
        backdrop-blur-xl

        border-b
        border-base-300

        lg:right-56
        lg:w-[calc(100%-14rem)]
      '>
      <div className='flex h-20 items-center justify-between px-5 lg:px-8'>
        {/* ========================================= */}
        {/* Right */}
        {/* ========================================= */}

        <div>
          <h1 className='text-2xl font-bold text-primary'>{currentTitle}</h1>

          <Breadcrumb />
        </div>

        {/* ========================================= */}
        {/* Left */}
        {/* ========================================= */}

        <div className='flex items-center gap-3'>
          {/* Search */}

          <label className='hidden lg:flex items-center gap-3 rounded-2xl border border-base-300 bg-base-200 px-4 h-12 w-80 transition-all focus-within:border-primary'>
            <SearchNormal1 size={20} variant='Bulk' className='text-primary' />

            <input
              type='text'
              placeholder='جستجو...'
              className='flex-1 bg-transparent outline-none placeholder:text-base-content/40'
            />
          </label>

          {/* Theme */}

          <button
            onClick={toggleTheme}
            className='btn btn-ghost btn-circle border border-base-300'>
            {theme === "dark" ?
              <Sun1 size={22} variant='Bulk' className='text-warning' />
            : <Moon size={22} variant='Bulk' className='text-primary' />}
          </button>

          {/* Notifications */}

          <button className='btn btn-ghost btn-circle border border-base-300 relative'>
            <Notification size={22} variant='Bulk' className='text-primary' />

            <span className='absolute right-2 top-2 flex h-2.5 w-2.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60'></span>

              <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-primary'></span>
            </span>
          </button>

          <div className='h-8 w-px bg-base-300' />

          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
