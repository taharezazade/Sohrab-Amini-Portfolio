/** @format */

import { motion } from "framer-motion";
import { Code1, ProfileCircle } from "iconsax-reactjs";

const AboutHeader = () => {
  return (
    <motion.div
      className='flex flex-col items-center text-center gap-5 mb-12'
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}>
      {/* Badge */}
      <motion.div
        className='
          flex items-center gap-2
          px-4 py-2
          rounded-full
          bg-primary/10
          text-primary
          border border-primary/20
          text-sm
          font-medium
        '
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}>
        <ProfileCircle size={18} variant='Bulk' />

        <span>درباره من</span>
      </motion.div>

      {/* Title */}
      <motion.h2
        className='
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-black
          leading-tight
        '
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}>
        توسعه‌دهنده‌ای که
        <span className='text-primary'> ایده‌ها</span>
        را به محصول تبدیل می‌کند
      </motion.h2>

      {/* Description */}
      <motion.p
        className='
          max-w-2xl
          text-base
          sm:text-lg
          text-base-content/70
          leading-8
        '
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.25,
        }}>
        من سهراب امینی، توسعه‌دهنده وردپرس و برنامه‌نویس وب هستم. تمرکزم روی
        طراحی سایت‌های حرفه‌ای، توسعه قالب‌های اختصاصی، بهینه‌سازی عملکرد و ساخت
        تجربه‌های سریع و کاربردی برای کاربران است.
      </motion.p>

      {/* Tech indicator */}
      <motion.div
        className='
          flex
          items-center
          gap-3
          mt-2
          text-sm
          text-base-content/60
        '
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 0.35,
        }}>
        <Code1 size={20} className='text-primary' variant='Bulk' />

        <span>WordPress • PHP • JavaScript • React</span>
      </motion.div>
    </motion.div>
  );
};

export default AboutHeader;
