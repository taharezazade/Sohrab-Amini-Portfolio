/** @format */

import { motion } from "framer-motion";
import { Home2, TickCircle, Warning2 } from "iconsax-reactjs";

const HeroHeader = () => {
  // بعدا از API میاد
  const heroStatus = true;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className='rounded-2xl border border-base-300 bg-base-100 p-5 md:p-6'>
      <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
        {/* =========================
            Right
        ========================= */}

        <div className='flex items-start gap-4'>
          <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:h-14 md:w-14'>
            <Home2 size={24} variant='Bulk' />
          </div>

          <div>
            <h1 className='text-xl font-bold md:text-2xl'>مدیریت بخش هیرو</h1>

            <p className='mt-2 max-w-2xl text-sm leading-7 text-base-content/60'>
              از این بخش می‌توانید عنوان اصلی، زیرعنوان، توضیحات، تصویر، فایل
              رزومه و وضعیت نمایش Hero صفحه اصلی را مدیریت کنید.
            </p>
          </div>
        </div>

        {/* =========================
            Left
        ========================= */}

        <div className='grid grid-cols-2 gap-3 sm:w-fit'>
          <div className='rounded-xl border border-base-300 bg-base-200 px-4 py-3'>
            <p className='text-xs text-base-content/50'>وضعیت Hero</p>

            <div className='mt-2 flex items-center gap-2'>
              {heroStatus ?
                <>
                  <TickCircle
                    size={18}
                    variant='Bulk'
                    className='text-success'
                  />

                  <span className='font-medium text-success'>فعال</span>
                </>
              : <>
                  <Warning2 size={18} variant='Bulk' className='text-warning' />

                  <span className='font-medium text-warning'>غیرفعال</span>
                </>
              }
            </div>
          </div>

          <div className='rounded-xl border border-base-300 bg-base-200 px-4 py-3'>
            <p className='text-xs text-base-content/50'>آخرین بروزرسانی</p>

            <p className='mt-2 text-sm font-medium'>همین الان</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroHeader;
