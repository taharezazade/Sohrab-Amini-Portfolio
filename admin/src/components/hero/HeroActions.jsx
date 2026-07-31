/** @format */

import { motion } from "framer-motion";
import { Save2, Refresh2, Eye, ArrowRotateLeft } from "iconsax-reactjs";

const HeroActions = () => {
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
        <h2 className='text-xl font-bold'>عملیات</h2>

        <p className='mt-1 text-sm text-base-content/60'>
          تغییرات را ذخیره، بازنشانی یا پیش‌نمایش کنید.
        </p>
      </div>

      {/* =======================================================
          Buttons
      ======================================================= */}

      <div className='grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4'>
        <button className='btn btn-primary h-10 rounded-2xl'>
          <Save2 size={22} variant='Bulk' />
          ذخیره تغییرات
        </button>

        <button className='btn btn-outline btn-primary h-10 rounded-2xl'>
          <Eye size={22} variant='Bulk' />
          پیش‌نمایش
        </button>

        <button className='btn btn-outline btn-primary h-10 rounded-2xl'>
          <Refresh2 size={22} variant='Bulk' />
          بروزرسانی
        </button>

        <button className='btn btn-outline h-10 rounded-2xl'>
          <ArrowRotateLeft size={22} variant='Bulk' />
          بازنشانی فرم
        </button>
      </div>

      {/* =======================================================
          Footer
      ======================================================= */}

      <div className='border-t border-base-300 px-6 py-4'>
        <p className='text-center text-sm leading-6 text-base-content/55'>
          پس از ذخیره، اطلاعات Hero بلافاصله در وب‌سایت بروزرسانی خواهد شد.
        </p>
      </div>
    </motion.section>
  );
};

export default HeroActions;
