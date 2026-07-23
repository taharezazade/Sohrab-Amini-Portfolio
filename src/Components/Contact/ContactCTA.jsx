/** @format */

import { motion } from "framer-motion";

import { ArrowLeft2, CallCalling, Whatsapp } from "iconsax-reactjs";

import { contactData } from "./contact.data";

import { ctaVariants } from "./contact.animations";

function ContactCTA() {
  return (
    <motion.section
      variants={ctaVariants}
      className='
        relative
        overflow-hidden

        rounded-[2rem]
        border
        border-primary/15

        bg-gradient-to-br
        from-primary/10
        via-base-100
        to-primary/5

        p-4
        sm:p-10
        lg:p-8
      '>
      {/* Background Glow */}

      <div
        className='
          absolute
          -top-28
          -left-28

          h-72
          w-72

          rounded-full
          bg-primary/10

          blur-[120px]
        '
      />

      <div
        className='
          absolute
          -bottom-32
          -right-24

          h-80
          w-80

          rounded-full
          bg-secondary/10

          blur-[140px]
        '
      />

      <div className='relative z-10'>
        <span
          className='
            badge
            badge-primary
            badge-outline
            rounded-full
            px-5
            py-4
          '>
          بیایید چیزی عالی بسازیم
        </span>

        <h2
          className='
            mt-6

            text-3xl
            font-black
            leading-relaxed

            lg:text-5xl
          '>
          {contactData.cta.title}
        </h2>

        <p
          className='
            mt-6

            max-w-3xl

            leading-9

            text-base-content/70
          '>
          {contactData.cta.description}
        </p>

        {/* Buttons */}

        <div
          className='
            mt-10

            flex
            flex-col
            gap-4

            sm:flex-row
          '>
          <a
            href={contactData.phone.href}
            className='
              btn
              btn-primary

              rounded-full

              px-8
              sm:px-10
            '>
            <CallCalling size={22} variant='Bold' />
            تماس مستقیم
            <ArrowLeft2 size={18} />
          </a>

          <a
            href={contactData.whatsapp.href}
            target='_blank'
            rel='noopener noreferrer'
            className='
              btn
              btn-outline

              rounded-full

              px-8
              sm:px-10
            '>
            <Whatsapp size={22} variant='Bold' />
            گفتگو در واتساپ
          </a>
        </div>

        {/* Bottom Information */}

        <div
          className='
            mt-10

            flex
            flex-col
            gap-5

            border-t
            border-base-300/60

            pt-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          '>
          <div>
            <p
              className='
                text-sm
                text-base-content/60
              '>
              شماره تماس
            </p>

            <p
              className='
                mt-2

                text-2xl
                font-black
              '>
              {contactData.phone.number}
            </p>
          </div>

          <div
            className='
              rounded-2xl

              border
              border-success/20

              bg-success/10

              px-5
              py-4
            '>
            <p className='font-bold text-success'>
              آماده دریافت پروژه‌های جدید
            </p>

            <p
              className='
                mt-1
                text-sm
                text-base-content/70
              '>
              پاسخگویی سریع از طریق تماس تلفنی و واتساپ.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactCTA;
