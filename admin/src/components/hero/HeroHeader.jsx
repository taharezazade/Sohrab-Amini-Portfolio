/** @format */

import { motion } from "framer-motion";
import { Home2, Edit2 } from "iconsax-reactjs";

const HeroHeader = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className='rounded-3xl border border-base-300 bg-base-100 p-6'>
      <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-start gap-4'>
          <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
            <Home2 size={28} variant='Bulk' />
          </div>

          <div>
            <h1 className='text-2xl font-black'>مدیریت بخش هیرو</h1>

            <p className='mt-2 max-w-2xl text-sm leading-7 text-base-content/60'>
              عنوان اصلی، توضیحات، تصویر، رزومه و وضعیت نمایش بخش هیرو را از این
              قسمت مدیریت کنید.
            </p>
          </div>
        </div>

        <button className='btn btn-primary rounded-2xl'>
          <Edit2 size={18} />
          ویرایش اطلاعات
        </button>
      </div>
    </motion.section>
  );
};

export default HeroHeader;
