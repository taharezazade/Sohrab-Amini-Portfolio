/** @format */

import { motion } from "framer-motion";

import ContactHero from "./ContactHero";
import ContactImage from "./ContactImage";
import ContactMethods from "./ContactMethods";
import ContactFeatures from "./ContactFeatures";
import ContactCTA from "./ContactCTA";

import useContact from "@/hooks/useContact";

import {
  containerVariants,
  fadeLeftVariants,
  fadeRightVariants,
} from "./contact.animations";

function Contact() {
  const { contact } = useContact();

  return (
    <section id='contact' className='relative overflow-hidden'>
      <div className='pointer-events-none absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[160px]' />

      <div className='pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[140px]' />

      <div className='container relative z-10 mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className='grid items-center gap-16 lg:grid-cols-2'>
          {/* Contact Information - API */}
          <motion.div variants={fadeLeftVariants}>
            <ContactHero contact={contact} />
          </motion.div>

          {/* Sohrab Image - STATIC */}
          <motion.div
            variants={fadeRightVariants}
            className='order-first lg:order-last'>
            <ContactImage />
          </motion.div>
        </motion.div>

        {/* Contact Methods - API */}
        <div className='mt-10'>
          <ContactMethods contact={contact} />
        </div>

        {/* Features - Static */}
        <div className='mt-28'>
          <ContactFeatures />
        </div>

        {/* CTA */}
        <div className=''>
          <ContactCTA contact={contact} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
