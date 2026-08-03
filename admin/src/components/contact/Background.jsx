/** @format */

import { motion } from "framer-motion";

const blobs = [
  {
    className: "top-[-180px] left-[-120px] h-[420px] w-[420px] bg-primary/15",
    duration: 18,
  },
  {
    className: "top-1/3 right-[-140px] h-[360px] w-[360px] bg-secondary/15",
    duration: 22,
  },
  {
    className: "bottom-[-180px] left-1/3 h-[420px] w-[420px] bg-accent/15",
    duration: 26,
  },
];

const Background = () => {
  return (
    <div
      className='
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        -z-10
      '>
      {/* Base */}

      <div
        className='
          absolute
          inset-0
          bg-base-200
        '
      />

      {/* Grid */}

      <div
        className='
          absolute
          inset-0
          opacity-[0.04]
        '
        style={{
          backgroundImage: `
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient */}

      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]

          dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]
        '
      />

      {/* Blobs */}

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -25, 30, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            absolute
            rounded-full
            blur-[110px]
            ${blob.className}
          `}
        />
      ))}

      {/* Vignette */}

      <div
        className='
          absolute
          inset-0

          bg-gradient-to-b
          from-transparent
          via-transparent
          to-base-200/70
        '
      />
    </div>
  );
};

export default Background;
