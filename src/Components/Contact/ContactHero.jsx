/** @format */

import { motion } from "framer-motion";
import { ArrowLeft2, CallCalling, Whatsapp } from "iconsax-reactjs";

import { contactData } from "./contact.data";
import { fadeUpVariants } from "./contact.animations";

function ContactHero() {
  return (
    <motion.div variants={fadeUpVariants} className='max-w-2xl'>
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
          mt-2
          font-black
          leading-20
          text-3xl
          lg:text-5xl
        '>
        {contactData.title}
      </h2>

      <p
        className='
          mt-4
          text-base
          leading-9
          text-base-content/75
        '>
        {contactData.subtitle}
      </p>

      <p
        className='
          text-base
          leading-9
          text-base-content/70
        '>
        {contactData.description}
      </p>

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
          '>
          <Whatsapp size={22} variant='Bold' />
          گفتگو در واتساپ
        </a>
      </div>
    </motion.div>
  );
}

export default ContactHero;
