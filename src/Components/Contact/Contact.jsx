/** @format */

import { motion } from "framer-motion";

import ContactHero from "./ContactHero";
import ContactImage from "./ContactImage";
import ContactMethods from "./ContactMethods";
import ContactFeatures from "./ContactFeatures";
import ContactCTA from "./ContactCTA";

import {
  containerVariants,
  fadeLeftVariants,
  fadeRightVariants,
} from "./contact.animations";

function Contact() {
  return (
    <section
      id='contact'
      className='
        relative
        overflow-hidden
        pt-28
      '>
      {/* Background Glow */}

      <div
        className='
          pointer-events-none
          absolute
          top-0
          left-1/2
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-primary/5
          blur-[160px]
        '
      />

      <div
        className='
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-[400px]
          w-[400px]
          rounded-full
          bg-secondary/10
          blur-[140px]
        '
      />

      <div
        className='
          container
          relative
          z-10
          mx-auto
          px-4
        '>
        {/* ================= Hero ================= */}

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className='
            grid
            items-center
            gap-16
            lg:grid-cols-2
          '>
          <motion.div variants={fadeLeftVariants}>
            <ContactHero />
          </motion.div>

          <motion.div
            variants={fadeRightVariants}
            className='
              order-first
              lg:order-last
            '>
            <ContactImage />
          </motion.div>
        </motion.div>

        {/* ================= Contact Methods ================= */}

        <div className='mt-24'>
          <ContactMethods />
        </div>

        {/* ================= Features ================= */}

        <div className='mt-28'>
          <ContactFeatures />
        </div>

        {/* ================= CTA ================= */}

        <div className='mt-28'>
          <ContactCTA />
        </div>
      </div>
    </section>
  );
}

export default Contact;
