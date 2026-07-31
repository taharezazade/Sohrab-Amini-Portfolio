/** @format */

import { motion } from "framer-motion";

/* Login Background */

const LoginBackground = () => {
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>
      {/* Base Background */}
      <div className='absolute inset-0 bg-base-200' />

      {/* Grid */}
      <div
        className='absolute inset-0 opacity-[0.035]'
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Orange Glow */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='absolute -right-44 -top-44 h-[34rem] w-[34rem] rounded-full bg-orange-500/25 blur-[130px]'
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='absolute -left-56 bottom-0 h-[32rem] w-[32rem] rounded-full bg-violet-500/20 blur-[140px]'
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[150px]'
      />

      {/* Radial Light */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]' />

      {/* Noise Overlay */}
      <div
        className='absolute inset-0 opacity-[0.03] mix-blend-soft-light'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default LoginBackground;
