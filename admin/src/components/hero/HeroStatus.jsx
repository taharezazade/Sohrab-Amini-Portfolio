/** @format */

import { motion } from "framer-motion";
import {
  TickCircle,
  Warning2,
  Gallery,
  DocumentUpload,
  Eye,
  ShieldSecurity,
} from "iconsax-reactjs";

const checks = [
  {
    id: 1,
    title: "عنوان اصلی",
    status: true,
  },
  {
    id: 2,
    title: "زیرعنوان",
    status: true,
  },
  {
    id: 3,
    title: "توضیحات",
    status: true,
  },
  {
    id: 4,
    title: "تصویر هیرو",
    status: false,
  },
  {
    id: 5,
    title: "فایل رزومه",
    status: true,
  },
];

const HeroStatus = () => {
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
        duration: 0.4,
      }}
      className='rounded-3xl border border-base-300 bg-base-100'>
      {/* ========================================= */}

      <div className='border-b border-base-300 p-6'>
        <h2 className='text-xl font-bold'>وضعیت بخش هیرو</h2>

        <p className='mt-1 text-sm text-base-content/60'>
          بررسی سریع اطلاعات مورد نیاز برای نمایش صفحه اصلی
        </p>
      </div>

      {/* ========================================= */}

      <div className='grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-3'>
        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Eye size={26} variant='Bulk' />
            </div>

            <div>
              <p className='text-sm text-base-content/60'>وضعیت نمایش</p>

              <h3 className='mt-1 font-bold text-success'>فعال</h3>
            </div>
          </div>
        </div>

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Gallery size={26} variant='Bulk' />
            </div>

            <div>
              <p className='text-sm text-base-content/60'>تصویر</p>

              <h3 className='mt-1 font-bold'>hero.webp</h3>
            </div>
          </div>
        </div>

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <DocumentUpload size={26} variant='Bulk' />
            </div>

            <div>
              <p className='text-sm text-base-content/60'>رزومه</p>

              <h3 className='mt-1 font-bold'>Resume.pdf</h3>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}

      <div className='border-t border-base-300 p-6'>
        <div className='mb-5 flex items-center gap-3'>
          <ShieldSecurity size={22} variant='Bulk' className='text-primary' />

          <h3 className='font-bold'>بررسی اطلاعات</h3>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          {checks.map((item) => (
            <div
              key={item.id}
              className='flex items-center justify-between rounded-2xl border border-base-300 bg-base-200 px-5 py-4'>
              <span className='font-medium'>{item.title}</span>

              {item.status ?
                <TickCircle size={22} variant='Bulk' className='text-success' />
              : <Warning2 size={22} variant='Bulk' className='text-warning' />}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroStatus;
