/** @format */

import { motion } from "framer-motion";
import {
  Code1,
  ShieldSecurity,
  //   Cpu,
  ProgrammingArrows,
  TickCircle,
  Flash,
} from "iconsax-reactjs";

import { fadeUp, fadeLeft, staggerContainer } from "./services.animations";

const technologies = [
  "PHP",
  "WordPress",
  "MySQL",
  "HTML5",
  "CSS3",
  "JavaScript",
  "jQuery",
  "REST API",
  "Git",
  "Apache",
  "Nginx",
];

const stats = [
  {
    value: "100%",
    label: "کدنویسی اختصاصی",
  },
  {
    value: "SEO",
    label: "بهینه‌سازی فنی",
  },
  {
    value: "24/7",
    label: "پشتیبانی",
  },
  {
    value: "Secure",
    label: "امنیت بالا",
  },
];

const features = [
  "طراحی کاملاً اختصاصی",
  "کدنویسی استاندارد",
  "سرعت بارگذاری بالا",
  "امنیت حرفه‌ای",
];

function ServicesHeader() {
  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='
        grid
        items-center
        gap-16
        lg:grid-cols-2
      '>
      {/* ================= Right ================= */}

      <motion.div variants={fadeUp} className='space-y-8'>
        <span
          className='
            badge
            badge-primary
            badge-lg
            rounded-full
            px-5
          '>
          خدمات تخصصی
        </span>

        <div className='space-y-5'>
          <h2
            className='
              text-4xl
              font-black
              leading-normal
              md:text-5xl
            '>
            طراحی و توسعه
            <span className='text-primary'> وب‌سایت‌های حرفه‌ای وردپرسی</span>
          </h2>

          <p
            className='
              max-w-2xl
              leading-9
              text-base-content/70
            '>
            ارائه راهکارهای حرفه‌ای برای طراحی، توسعه و نگهداری وب‌سایت‌های
            وردپرسی با تمرکز بر عملکرد، امنیت، تجربه کاربری و توسعه‌پذیری. تمامی
            پروژه‌ها به صورت اصولی، مقیاس‌پذیر و مطابق استانداردهای روز
            برنامه‌نویسی پیاده‌سازی می‌شوند.
          </p>
        </div>

        <div
          className='
            grid
            gap-4
            sm:grid-cols-2
          '>
          {features.map((item) => (
            <div
              key={item}
              className='
                flex
                items-center
                gap-3
              '>
              <TickCircle variant='Bold' size={20} className='text-success' />

              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className='flex flex-wrap gap-3'>
          <button className='btn btn-primary rounded-full'>شروع همکاری</button>

          <button className='btn btn-outline rounded-full'>
            مشاهده نمونه کارها
          </button>
        </div>
      </motion.div>

      {/* ================= Left ================= */}

      <motion.div variants={fadeLeft} className='space-y-8'>
        {/* Stats */}

        <div
          className='
            grid
            grid-cols-2
            gap-4
          '>
          {stats.map((item) => (
            <motion.div
              whileHover={{
                y: -6,
              }}
              key={item.label}
              className='
                rounded-3xl
                border
                border-base-300
                bg-base-100
                p-6
                shadow-lg
              '>
              <h3
                className='
                  text-3xl
                  font-black
                  text-primary
                '>
                {item.value}
              </h3>

              <p
                className='
                  mt-2
                  text-base-content/70
                '>
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}

        <div
          className='
            rounded-3xl
            border
            border-base-300
            bg-base-100
            p-6
            shadow-lg
          '>
          <div
            className='
              mb-6
              flex
              items-center
              gap-3
            '>
            <ProgrammingArrows
              size={24}
              variant='Bulk'
              className='text-primary'
            />

            <h3
              className='
                text-xl
                font-bold
              '>
              تکنولوژی‌های مورد استفاده
            </h3>
          </div>

          <div
            className='
              flex
              flex-wrap
              gap-3
            '>
            {technologies.map((tech) => (
              <span
                key={tech}
                className='
                  badge
                  badge-outline
                  badge-lg
                '>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Advantages */}

        <div
          className='
            grid
            gap-4
            md:grid-cols-3
          '>
          <div
            className='
              rounded-2xl
              border
              border-base-300
              bg-base-100
              p-5
              text-center
            '>
            <Flash variant='Bulk' size={34} className='mx-auto text-warning' />

            <h4 className='mt-4 font-bold'>سرعت</h4>

            <p className='mt-2 text-sm text-base-content/70'>
              بهینه‌سازی کامل عملکرد و Core Web Vitals
            </p>
          </div>

          <div
            className='
              rounded-2xl
              border
              border-base-300
              bg-base-100
              p-5
              text-center
            '>
            <ShieldSecurity
              variant='Bulk'
              size={34}
              className='mx-auto text-success'
            />

            <h4 className='mt-4 font-bold'>امنیت</h4>

            <p className='mt-2 text-sm text-base-content/70'>
              مقاوم در برابر حملات و آسیب‌پذیری‌های رایج
            </p>
          </div>

          <div
            className='
              rounded-2xl
              border
              border-base-300
              bg-base-100
              p-5
              text-center'>
            <Code1 variant='Bulk' size={34} className='mx-auto text-primary' />

            <h4 className='mt-4 font-bold'>توسعه اختصاصی</h4>

            <p className='mt-2 text-sm text-base-content/70'>
              توسعه قالب، افزونه و سیستم‌های سفارشی
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ServicesHeader;
