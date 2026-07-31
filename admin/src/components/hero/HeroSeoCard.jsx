/** @format */

import { motion } from "framer-motion";
import {
  GlobalSearch,
  Hashtag,
  Link21,
  DocumentText,
  Warning2,
} from "iconsax-reactjs";

const HeroSeoCard = () => {
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
        <h2 className='text-xl font-bold'>وضعیت SEO</h2>

        <p className='mt-1 text-sm text-base-content/60'>
          بررسی سریع اطلاعات سئوی بخش Hero
        </p>
      </div>

      {/* =======================================================
          Content
      ======================================================= */}

      <div className='space-y-4 p-6'>
        {/* Title */}

        <div className='flex items-start gap-4 rounded-2xl border border-base-300 bg-base-200 p-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
            <DocumentText size={22} variant='Bulk' />
          </div>

          <div className='flex-1'>
            <h3 className='font-semibold'>عنوان صفحه</h3>

            <p className='mt-1 text-sm text-base-content/60'>
              Professional WordPress Developer
            </p>

            <div className='mt-3 badge badge-success badge-outline rounded-xl'>
              مناسب
            </div>
          </div>
        </div>

        {/* Slug */}

        <div className='flex items-start gap-4 rounded-2xl border border-base-300 bg-base-200 p-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
            <Link21 size={22} variant='Bulk' />
          </div>

          <div className='flex-1'>
            <h3 className='font-semibold'>آدرس صفحه</h3>

            <p className='mt-1 text-sm break-all text-base-content/60'>
              /home#hero
            </p>
          </div>
        </div>

        {/* Keywords */}

        <div className='flex items-start gap-4 rounded-2xl border border-base-300 bg-base-200 p-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
            <Hashtag size={22} variant='Bulk' />
          </div>

          <div className='flex-1'>
            <h3 className='font-semibold'>کلمات کلیدی</h3>

            <div className='mt-3 flex flex-wrap gap-2'>
              <div className='badge badge-primary badge-outline rounded-xl'>
                WordPress
              </div>

              <div className='badge badge-primary badge-outline rounded-xl'>
                PHP
              </div>

              <div className='badge badge-primary badge-outline rounded-xl'>
                Developer
              </div>

              <div className='badge badge-primary badge-outline rounded-xl'>
                Portfolio
              </div>
            </div>
          </div>
        </div>

        {/* SEO Score */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                <GlobalSearch size={22} variant='Bulk' />
              </div>

              <div>
                <h3 className='font-semibold'>امتیاز SEO</h3>

                <p className='text-sm text-base-content/60'>
                  وضعیت کلی اطلاعات
                </p>
              </div>
            </div>

            <span className='text-3xl font-black text-primary'>92%</span>
          </div>

          <progress
            className='progress progress-primary h-3 w-full'
            value={92}
            max={100}></progress>
        </div>

        {/* Warning */}

        <div className='flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-4'>
          <Warning2 size={22} variant='Bulk' className='mt-0.5 text-warning' />

          <div>
            <h4 className='font-semibold text-warning'>پیشنهاد بهینه‌سازی</h4>

            <p className='mt-1 text-sm leading-7 text-base-content/70'>
              بهتر است برای تصویر Hero متن جایگزین (Alt) و Meta Description نیز
              تنظیم شود.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSeoCard;
