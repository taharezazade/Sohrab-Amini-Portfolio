/** @format */

import { motion } from "framer-motion";
import {
  AddSquare,
  GalleryAdd,
  Profile2User,
  Setting2,
  ArrowLeft2,
  Flash,
} from "iconsax-reactjs";
import { Link } from "react-router-dom";

const actions = [
  {
    id: 1,
    title: "افزودن نمونه‌کار",
    description: "ثبت پروژه جدید در وب‌سایت",
    icon: GalleryAdd,
    to: "/portfolio",
  },
  {
    id: 2,
    title: "افزودن خدمت",
    description: "ثبت سرویس جدید",
    icon: AddSquare,
    to: "/services",
  },
  {
    id: 3,
    title: "ویرایش درباره من",
    description: "بروزرسانی اطلاعات شخصی",
    icon: Profile2User,
    to: "/about",
  },
  {
    id: 4,
    title: "تنظیمات سایت",
    description: "مدیریت تنظیمات پنل",
    icon: Setting2,
    to: "/settings",
  },
];

const DashboardQuickActions = () => {
  return (
    <section className='space-y-6'>
      {/* =======================================================
          Header
      ======================================================= */}

      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-xl font-bold'>دسترسی سریع</h2>

          <p className='mt-1 text-sm text-base-content/60'>
            پرکاربردترین بخش‌های پنل مدیریت
          </p>
        </div>

        <div className='badge badge-primary badge-outline gap-2 rounded-xl px-4 py-4'>
          <Flash size={16} variant='Bulk' />
          میانبرها
        </div>
      </div>

      {/* =======================================================
          Cards
      ======================================================= */}

      <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}>
              <Link
                to={action.to}
                className='group relative block overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl'>
                {/* Glow */}

                <div className='pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/5 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100' />

                <div className='relative z-10 flex h-full flex-col justify-between'>
                  <div className='space-y-5'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-content'>
                      <Icon size={30} variant='Bulk' />
                    </div>

                    <div>
                      <h3 className='text-lg font-bold transition-colors group-hover:text-primary'>
                        {action.title}
                      </h3>

                      <p className='mt-2 text-sm leading-7 text-base-content/60'>
                        {action.description}
                      </p>
                    </div>
                  </div>

                  <div className='mt-8 flex items-center justify-between'>
                    <span className='text-sm font-medium text-primary'>
                      ورود به بخش
                    </span>

                    <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-base-200 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-content'>
                      <ArrowLeft2
                        size={18}
                        className='transition-transform duration-300 group-hover:-translate-x-1'
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardQuickActions;
