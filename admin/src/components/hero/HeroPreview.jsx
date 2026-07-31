/** @format */

import { motion } from "framer-motion";
import { DocumentDownload, Eye, Gallery, TickCircle } from "iconsax-reactjs";

const heroData = {
  title: "Professional WordPress Developer",

  subtitle: "Custom WordPress Solutions & PHP Backend Development",

  description:
    "I develop custom WordPress themes, plugins, backend systems with PHP, optimize website performance, strengthen security, and build scalable web solutions.",

  image: "/uploads/hero/hero.webp",

  resume: "/uploads/hero/Sohrab-Amini-Resume.pdf",

  isActive: true,
};

const HeroPreview = () => {
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
      className='rounded-3xl border border-base-300 bg-base-100 p-6'>
      {/* =======================================================
          Header
      ======================================================= */}

      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h2 className='text-xl font-bold'>پیش‌نمایش اطلاعات</h2>

          <p className='mt-1 text-sm text-base-content/60'>
            آخرین اطلاعات ذخیره شده در سایت
          </p>
        </div>

        <div className='badge badge-success gap-2 rounded-xl px-4 py-4'>
          <TickCircle size={16} variant='Bulk' />
          {heroData.isActive ? "فعال" : "غیرفعال"}
        </div>
      </div>

      {/* =======================================================
          Content
      ======================================================= */}

      <div className='grid gap-6 xl:grid-cols-[340px_1fr]'>
        {/* =======================================================
            Image
        ======================================================= */}

        <div className='overflow-hidden rounded-2xl border border-base-300 bg-base-200'>
          <div className='flex aspect-[4/5] items-center justify-center'>
            <Gallery size={70} className='text-base-content/20' />
          </div>

          <div className='border-t border-base-300 p-4'>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-base-content/60'>تصویر هیرو</span>

              <button className='btn btn-ghost btn-sm btn-circle'>
                <Eye size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* =======================================================
            Information
        ======================================================= */}

        <div className='space-y-5'>
          <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
            <span className='text-xs text-base-content/50'>عنوان اصلی</span>

            <h3 className='mt-2 text-2xl font-black leading-relaxed'>
              {heroData.title}
            </h3>
          </div>

          <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
            <span className='text-xs text-base-content/50'>زیرعنوان</span>

            <p className='mt-2 font-semibold leading-8'>{heroData.subtitle}</p>
          </div>

          <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
            <span className='text-xs text-base-content/50'>توضیحات</span>

            <p className='mt-3 leading-8 text-base-content/70'>
              {heroData.description}
            </p>
          </div>

          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='flex flex-1 items-center justify-between rounded-2xl border border-base-300 bg-base-200 p-5'>
              <div>
                <p className='text-xs text-base-content/50'>رزومه</p>

                <h4 className='mt-2 font-semibold'>Sohrab-Amini-Resume.pdf</h4>
              </div>

              <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                <DocumentDownload size={24} variant='Bulk' />
              </div>
            </div>

            <div className='flex flex-1 items-center justify-between rounded-2xl border border-base-300 bg-base-200 p-5'>
              <div>
                <p className='text-xs text-base-content/50'>وضعیت نمایش</p>

                <h4 className='mt-2 font-semibold'>
                  {heroData.isActive ? "در حال نمایش" : "غیرفعال"}
                </h4>
              </div>

              <div className='badge badge-success rounded-xl px-4 py-4'>
                فعال
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroPreview;
