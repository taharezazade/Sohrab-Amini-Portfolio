/** @format */

import { motion } from "framer-motion";
import { QuoteUp } from "iconsax-reactjs";

import { quoteVariant } from "./about.animations";

function AboutQuote({ data }) {
  if (!data) return null;

  return (
    <motion.section variants={quoteVariant} className='mt-16'>
      <div
        className='
          relative
          overflow-hidden
          w-full
          py-5
          text-center
        '>
        <div
          className='
            absolute
            -top-20
            left-1/2
            h-64
            w-64
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-[110px]
          '
        />

        <motion.div
          animate={{
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className='relative z-10'>
          <QuoteUp variant='Bulk' size={46} className='mx-auto text-primary' />
        </motion.div>

        <h3
          className='
            relative
            z-10
            mt-8
            mx-auto
            max-w-4xl
            text-2xl
            font-bold
            text-base-content
            md:text-3xl
          '>
          "{data}"
        </h3>
      </div>
    </motion.section>
  );
}

export default AboutQuote;
