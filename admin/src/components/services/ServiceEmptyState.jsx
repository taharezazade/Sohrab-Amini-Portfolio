/** @format */

import { motion } from "framer-motion";
import { Add, Box } from "iconsax-reactjs";

const ServiceEmptyState = ({ onCreate, filtered = false }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className='card bg-base-100 border-base-300 border shadow-sm'>
      <div className='card-body items-center justify-center py-20 text-center'>
        {/* Icon */}
        <div className='bg-primary/10 text-primary flex h-24 w-24 items-center justify-center rounded-3xl'>
          <Box size={48} variant='Bulk' />
        </div>

        {/* Content */}
        <h3 className='mt-6 text-2xl font-black'>
          {filtered ? "سرویسی پیدا نشد" : "هنوز سرویسی ایجاد نشده است"}
        </h3>

        <p className='text-base-content/60 mt-3 max-w-md leading-7'>
          {filtered ?
            "با تغییر فیلترها یا عبارت جستجو دوباره تلاش کنید."
          : "برای شروع، اولین سرویس خود را ایجاد کنید و آن را در وب‌سایت نمایش دهید."
          }
        </p>

        {/* Action */}
        {!filtered && (
          <button
            type='button'
            onClick={onCreate}
            className='btn btn-primary mt-8 gap-2 rounded-xl px-6'>
            <Add size={20} variant='Bold' />
            ایجاد سرویس جدید
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceEmptyState;
