/** @format */

import { motion } from "framer-motion";
import { Add, Setting4 } from "iconsax-reactjs";

const ServicesHeader = ({ onCreate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className='mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
      <div>
        <div className='mb-3 flex items-center gap-3'>
          <div className='bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl'>
            <Setting4 size={24} variant='Bold' />
          </div>

          <div>
            <h1 className='text-base-content text-3xl font-black'>
              مدیریت سرویس‌ها
            </h1>

            <p className='text-base-content/60 mt-1 text-sm'>
              ایجاد، ویرایش، حذف و مدیریت سرویس‌های وب‌سایت.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onCreate}
        className='btn btn-primary gap-2 rounded-xl px-6'>
        <Add size={20} variant='Bold' />
        افزودن سرویس
      </button>
    </motion.div>
  );
};

export default ServicesHeader;
