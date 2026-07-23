/** @format */

import { motion } from "framer-motion";

import { contactData } from "./contact.data";

import {
  imageVariants,
  floatingAnimation,
  glowAnimation,
} from "./contact.animations";

function ContactImage() {
  return (
    <motion.div
      variants={imageVariants}
      className='
        relative
        flex
        items-end
        justify-center
      '>
      {/* Primary Glow */}

      <motion.div
        animate={glowAnimation}
        className='
          absolute
          bottom-12
          h-[420px]
          w-[420px]
          rounded-full
          bg-primary/20
          blur-[120px]
        '
      />

      {/* Secondary Glow */}

      <motion.div
        animate={glowAnimation}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className='
          absolute
          top-10
          right-12
          h-48
          w-48
          rounded-full
          bg-secondary/20
          blur-[90px]
        '
      />

      {/* Decorative Circle */}

      <div
        className='
          absolute
          inset-x-0
          bottom-0
          mx-auto
          h-[380px]
          w-[380px]
          rounded-full
          border
          border-primary/10
        '
      />

      {/* Image */}

      <motion.img
        src={contactData.image}
        alt='Sohrab Amini'
        animate={floatingAnimation}
        whileHover={{
          scale: 1.03,
        }}
        transition={{
          duration: 0.35,
        }}
        className='
          relative
          z-10
          w-full
          max-w-[260px]
          sm:max-w-[310px]
          lg:max-w-[380px]
          xl:max-w-[430px]
          object-contain
          select-none
          drop-shadow-[0_35px_80px_rgba(0,0,0,.35)]
        '
        draggable={false}
      />
    </motion.div>
  );
}

export default ContactImage;
