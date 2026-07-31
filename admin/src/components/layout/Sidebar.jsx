/** @format */

import { useState } from "react";

import {
  Category,
  CloseCircle,
  DocumentText,
  FolderOpen,
  Home2,
  Login,
  HamburgerMenu,
  Message,
  Profile2User,
  Setting2,
} from "iconsax-reactjs";

import useAuth from "../../hooks/useAuth";

import SidebarItem from "./SidebarItem";

const menuItems = [
  {
    title: "داشبورد",
    path: "/dashboard",
    icon: Home2,
    end: true,
  },
  {
    title: "بخش هیرو",
    path: "/hero",
    icon: Category,
  },
  {
    title: "درباره من",
    path: "/about",
    icon: Profile2User,
  },
  {
    title: "خدمات",
    path: "/services",
    icon: DocumentText,
  },
  {
    title: "نمونه‌کارها",
    path: "/portfolio",
    icon: FolderOpen,
  },
  {
    title: "اطلاعات تماس",
    path: "/contact",
    icon: Message,
  },
  {
    title: "تنظیمات سایت",
    path: "/settings",
    icon: Setting2,
  },
];

const Sidebar = () => {
  const { admin, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* =======================================================
          Overlay
      ======================================================= */}

      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/40 lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* =======================================================
          Mobile Menu Button
      ======================================================= */}

      <button
        type='button'
        className='btn btn-accent btn-circle fixed bottom-4 right-4 z-50 lg:hidden'
        onClick={() => setIsOpen(true)}>
        <HamburgerMenu size={22} />
      </button>

      {/* =======================================================
          Sidebar
      ======================================================= */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-l
          border-base-300
          bg-base-100
          shadow-xl
          transition-transform
          duration-300

          ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        `}>
        {/* =======================================================
            Header
        ======================================================= */}

        <div className='flex items-center justify-between border-b border-base-300 p-3'>
          <div>
            <h2 className='text-lg font-bold text-primary'>پنل مدیریت</h2>

            <p className='mt-1 text-sm text-base-content/60'>سهراب امینی</p>
          </div>

          <button
            type='button'
            className='btn btn-ghost btn-circle lg:hidden'
            onClick={() => setIsOpen(false)}>
            <CloseCircle size={22} />
          </button>
        </div>

        {/* =======================================================
            Admin Information
        ======================================================= */}

        <div className='border-b border-base-300 p-3'>
          <h3 className='font-semibold'>{admin?.username || "مدیر سایت"}</h3>

          <p className='mt-1 text-sm text-base-content/60'>{admin?.email}</p>
        </div>

        {/* =======================================================
            Navigation
        ======================================================= */}

        <nav className='flex-1 overflow-y-auto p-3'>
          <ul className='space-y-2'>
            {menuItems.map((item) => (
              <SidebarItem
                key={item.path}
                to={item.path}
                title={item.title}
                icon={item.icon}
                end={item.end}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </nav>

        {/* =======================================================
            Footer
        ======================================================= */}

        <div className='border-t border-base-300 p-3'>
          <button
            type='button'
            className='btn btn-error text-error-content w-full rounded-xl gap-2'
            onClick={logout}>
            <Login size={20} variant='Bulk' />
            خروج از حساب کاربری
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
