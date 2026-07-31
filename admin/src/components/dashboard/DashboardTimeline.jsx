/** @format */

import { motion } from "framer-motion";
import {
  Gallery,
  Briefcase,
  Profile2User,
  Setting2,
  TickCircle,
} from "iconsax-reactjs";

const timeline = [
  {
    id: 1,
    title: "نمونه‌کار جدید منتشر شد",
    description: "پروژه فروشگاه اینترنتی با موفقیت منتشر شد.",
    time: "۱۰ دقیقه پیش",
    icon: Gallery,
  },
  {
    id: 2,
    title: "خدمت جدید اضافه شد",
    description: "سرویس توسعه افزونه وردپرس ثبت گردید.",
    time: "۱ ساعت پیش",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "اطلاعات پروفایل بروزرسانی شد",
    description: "بخش درباره من ویرایش شد.",
    time: "دیروز",
    icon: Profile2User,
  },
  {
    id: 4,
    title: "تنظیمات سیستم ذخیره شد",
    description: "تنظیمات عمومی وب‌سایت بروزرسانی شد.",
    time: "۳ روز پیش",
    icon: Setting2,
  },
];

const DashboardTimeline = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className='rounded-3xl border border-base-300 bg-base-100'>
      {/* =======================================================
          Header
      ======================================================= */}

      <div className='border-b border-base-300 p-6'>
        <h2 className='text-xl font-bold'>فعالیت‌های اخیر</h2>

        <p className='mt-1 text-sm text-base-content/60'>
          آخرین تغییرات انجام شده در پنل مدیریت
        </p>
      </div>

      {/* =======================================================
          Timeline
      ======================================================= */}

      <div className='relative p-6'>
        {/* Line */}

        <div className='absolute bottom-6 right-11 top-6 w-px bg-base-300' />

        <div className='space-y-8'>
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className='relative flex gap-5'>
                {/* Icon */}

                <div className='relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-md'>
                  <Icon size={20} variant='Bulk' />
                </div>

                {/* Content */}

                <div className='flex-1 rounded-2xl border border-base-300 bg-base-200 p-5 transition-all duration-300 hover:border-primary/30'>
                  <div className='flex flex-wrap items-center justify-between gap-2'>
                    <h3 className='font-bold'>{item.title}</h3>

                    <span className='text-xs text-base-content/50'>
                      {item.time}
                    </span>
                  </div>

                  <p className='mt-2 text-sm leading-7 text-base-content/65'>
                    {item.description}
                  </p>

                  <div className='mt-4 flex items-center gap-2 text-sm text-success'>
                    <TickCircle size={16} variant='Bulk' />

                    <span>ثبت شده</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default DashboardTimeline;
