/** @format */

import { motion } from "framer-motion";

import { TickCircle } from "iconsax-reactjs";

import { contactData } from "./contact.data";

import ContactMethods from "./ContactMethods";
import ContactCTA from "./ContactCTA";

import { fadeUpVariants, featureVariants } from "./contact.animations";

function ContactContent() {
  return (
    <div className='space-y-0'>
      {/* Heading */}

      <motion.div variants={fadeUpVariants}>
        <span
          className='
            badge
            badge-primary
            badge-outline
            rounded-full
            px-5
            py-4
          '>
          ارتباط با من
        </span>

        <h2
          className='
            mt-0

            text-4xl
            font-black
            leading-[1.8]

            lg:text-6xl
          '>
          {contactData.title}
        </h2>

        <p
          className='
            mt-8

            text-base
            leading-9

            text-base-content/75
          '>
          {contactData.subtitle}
        </p>

        <p
          className='
            mt-6

            text-base
            leading-9

            text-base-content/70
          '>
          {contactData.description}
        </p>
      </motion.div>

      {/* Features */}

      <motion.div variants={fadeUpVariants} className='space-y-5'>
        <h3
          className='
            text-2xl
            font-black
          '>
          چرا همکاری با من؟
        </h3>

        <div className='space-y-5'>
          {contactData.features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                variants={featureVariants}
                className='
                  flex
                  items-start
                  gap-5

                  rounded-3xl
                  border
                  border-base-300/60

                  bg-base-100/60

                  p-5
                '>
                <div
                  className='
                    flex
                    h-14
                    w-14

                    shrink-0
                    items-center
                    justify-center

                    rounded-2xl

                    bg-primary/10
                  '>
                  <Icon size={28} variant='Bulk' className='text-primary' />
                </div>

                <div>
                  <div className='flex items-center gap-2'>
                    <TickCircle
                      size={18}
                      variant='Bold'
                      className='text-success'
                    />

                    <h4 className='font-black'>{feature.title}</h4>
                  </div>

                  <p
                    className='
                      mt-3

                      leading-8

                      text-base-content/70
                    '>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contact Methods */}

      <motion.div variants={fadeUpVariants}>
        <h3
          className='
            mb-6

            text-2xl
            font-black
          '>
          راه‌های ارتباطی
        </h3>

        <ContactMethods />
      </motion.div>

      {/* CTA */}

      <motion.div variants={fadeUpVariants}>
        <ContactCTA />
      </motion.div>
    </div>
  );
}

export default ContactContent;
