/** @format */

import { motion } from "framer-motion";
import { ArrowLeft2, Calendar2, Flash } from "iconsax-reactjs";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const DashboardHero = () => {
  const { admin } = useAuth();

  const currentHour = new Date().getHours();

  const greeting =
    currentHour < 12 ? "صبح بخیر"
    : currentHour < 18 ? "عصر بخیر"
    : "شب بخیر";

  const today = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className='relative overflow-hidden rounded-3xl border border-primary/15 bg-base-100 p-5 md:p-6 xl:p-8 shadow-sm'>
      <div className='pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl' />

      <div className='pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl' />

      <div className='relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between'>
        {/* =======================================================
            Right
        ======================================================= */}

        <div className='flex-1 space-y-5'>
          <div className='inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm text-primary'>
            <Flash size={18} variant='Bulk' />

            <span>پنل مدیریت وب‌سایت</span>
          </div>
          <div>
            <h2 className='text-2xl font-black leading-relaxed md:text-3xl xl:text-4xl'>
              {greeting}
              <span className='text-primary'>
                {" "}
                {admin?.username || "مدیر سایت"}
              </span>
            </h2>

            <p className='mt-3 max-w-2xl text-sm leading-8 text-base-content/65 md:text-base'>
              به پنل مدیریت وب‌سایت خوش آمدید. از این بخش می‌توانید تمامی صفحات،
              نمونه‌کارها، خدمات، اطلاعات تماس و تنظیمات سایت را مدیریت کنید.
            </p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Link
              to='/hero'
              className='btn btn-primary w-full rounded-2xl sm:w-auto'>
              مدیریت هیرو
              <ArrowLeft2 size={18} />
            </Link>

            <Link
              to='/portfolio'
              className='btn btn-outline btn-primary w-full rounded-2xl sm:w-auto'>
              نمونه‌کارها
            </Link>
          </div>
        </div>

        {/* =======================================================
            Left
        ======================================================= */}

        <div className='grid w-full gap-4 sm:grid-cols-2 xl:w-[360px] xl:min-w-[360px]'>
          <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
            <p className='text-sm text-base-content/55'>تاریخ امروز</p>

            <div className='mt-4 flex items-start gap-3'>
              <div className='rounded-xl bg-primary/10 p-3 text-primary'>
                <Calendar2 size={22} variant='Bulk' />
              </div>

              <div>
                <h4 className='font-bold'>{today}</h4>

                <p className='mt-1 text-xs text-base-content/50'>
                  آخرین ورود شما ثبت شده است.
                </p>
              </div>
            </div>
          </div>
          <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
            <p className='text-sm text-base-content/55'>وضعیت سیستم</p>

            <div className='inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/10 p-2 mt-2 text-sm text-primary'>
              <span className='relative flex h-3 w-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75'></span>

                <span className='relative inline-flex h-3 w-3 rounded-full bg-success'></span>
              </span>
              <span className='font-semibold text-success'>سیستم فعال</span>
            </div>

            <p className='mt-3 text-xs leading-6 text-base-content/50'>
              تمامی سرویس‌های پنل مدیریت بدون مشکل در حال اجرا هستند.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DashboardHero;
