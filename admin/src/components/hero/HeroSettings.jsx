/** @format */

import { motion } from "framer-motion";
import {
  Eye,
  EyeSlash,
  DocumentUpload,
  Refresh2,
  TickCircle,
} from "iconsax-reactjs";

const HeroSettings = () => {
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
      {/* =======================================================
          Header
      ======================================================= */}

      <div className='border-b border-base-300 p-6'>
        <h2 className='text-xl font-bold'>تنظیمات بخش هیرو</h2>

        <p className='mt-1 text-sm text-base-content/60'>
          مدیریت وضعیت نمایش و فایل‌های مرتبط با Hero
        </p>
      </div>

      {/* =======================================================
          Content
      ======================================================= */}

      <div className='grid gap-6 p-6 lg:grid-cols-2'>
        {/* Visibility */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Eye size={26} variant='Bulk' />
            </div>

            <div className='flex-1'>
              <h3 className='font-bold'>نمایش بخش هیرو</h3>

              <p className='mt-1 text-sm text-base-content/60'>
                نمایش یا مخفی کردن Hero در صفحه اصلی
              </p>
            </div>

            <input
              type='checkbox'
              className='toggle toggle-primary'
              defaultChecked
            />
          </div>
        </div>

        {/* Resume */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <DocumentUpload size={26} variant='Bulk' />
            </div>

            <div className='flex-1'>
              <h3 className='font-bold'>رزومه</h3>

              <p className='mt-1 text-sm text-base-content/60'>
                فایل رزومه قابل دانلود کاربران
              </p>
            </div>

            <button className='btn btn-primary btn-sm rounded-xl'>تغییر</button>
          </div>
        </div>

        {/* Cache */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Refresh2 size={26} variant='Bulk' />
            </div>

            <div className='flex-1'>
              <h3 className='font-bold'>بروزرسانی کش</h3>

              <p className='mt-1 text-sm text-base-content/60'>
                اعمال تغییرات جدید روی سایت
              </p>
            </div>

            <button className='btn btn-outline btn-primary btn-sm rounded-xl'>
              بروزرسانی
            </button>
          </div>
        </div>

        {/* Status */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-success/10 text-success'>
              <TickCircle size={26} variant='Bulk' />
            </div>

            <div className='flex-1'>
              <h3 className='font-bold'>وضعیت اطلاعات</h3>

              <p className='mt-1 text-sm text-base-content/60'>
                تمامی اطلاعات Hero تکمیل شده است.
              </p>
            </div>

            <div className='badge badge-success badge-outline rounded-xl'>
              آماده
            </div>
          </div>
        </div>

        {/* Preview */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5 lg:col-span-2'>
          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
            <div>
              <h3 className='font-bold'>پیش‌نمایش صفحه اصلی</h3>

              <p className='mt-2 text-sm leading-7 text-base-content/60'>
                قبل از انتشار تغییرات، ظاهر Hero را در سایت بررسی کنید.
              </p>
            </div>

            <div className='flex flex-wrap gap-3'>
              <button className='btn btn-primary rounded-2xl'>
                <Eye size={18} />
                مشاهده
              </button>

              <button className='btn btn-outline btn-primary rounded-2xl'>
                <EyeSlash size={18} />
                غیرفعال کردن
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSettings;
