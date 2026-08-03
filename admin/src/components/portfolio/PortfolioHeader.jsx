/** @format */

import { motion } from "framer-motion";
import { Add, Gallery } from "iconsax-reactjs";

const PortfolioHeader = ({ total = 0, onCreate }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.3,
      }}

      className='
        card
        bg-base-100
        border-base-300
        border
        shadow-sm
      '>
      <div
        className='
          card-body
          flex
          flex-col
          gap-5

          md:flex-row
          md:items-center
          md:justify-between
        '>
        {/* Content */}

        <div
          className='
            flex
            items-center
            gap-4
          '>
          <div
            className='
              bg-primary/10
              text-primary
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
            '>
            <Gallery size={30} variant='Bulk' />
          </div>

          <div>
            <h1
              className='
                text-xl
                font-black

                md:text-2xl
              '>
              مدیریت نمونه‌کارها
            </h1>

            <p
              className='
                text-base-content/60
                mt-1
                text-sm
              '>
              مدیریت، ایجاد و ویرایش پروژه‌های ثبت شده
            </p>
          </div>
        </div>

        {/* Actions */}

        <div
          className='
            flex
            items-center
            gap-3
          '>
          <div
            className='
              badge
              badge-ghost
              hidden
              h-10
              px-4

              sm:flex
            '>
            <Gallery size={16} />

            <span>{total} پروژه</span>
          </div>

          <button
            onClick={onCreate}

            className='
              btn
              btn-primary
              rounded-xl
              gap-2
            '>
            <Add size={20} />
            افزودن نمونه‌کار
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioHeader;
