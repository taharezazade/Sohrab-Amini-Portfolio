/** @format */

import { motion } from "framer-motion";
import { ShieldSecurity } from "iconsax-reactjs";

/* Login Logo */

const LoginLogo = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -12 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='relative'>
        {/* Glow */}
        <div className='absolute inset-0 rounded-3xl bg-primary/20 blur-3xl' />

        {/* Logo */}
        <div className='relative flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-primary-content '>
          <ShieldSecurity size={40} variant='Bulk' />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.5,
        }}
        className='mt-7  text-primary bg-clip-text text-3xl font-black'>
        Sohrab Amini CMS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          duration: 0.5,
        }}
        className='mt-3 max-w-xs text-sm leading-7 text-base-content/60'>
        ورود به پنل مدیریت وب‌سایت برای مدیریت محتوای صفحات، نمونه‌کارها، خدمات
        و تنظیمات.
      </motion.p>
    </div>
  );
};

export default LoginLogo;
