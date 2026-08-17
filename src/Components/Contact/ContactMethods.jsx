/** @format */

import { motion } from "framer-motion";
import { createContactViewModel } from "./contact.data";
import { cardVariants } from "./contact.animations";

export default function ContactMethods({ contact }) {
  const data = createContactViewModel(contact);
  return (
    <div className='grid gap-5 sm:grid-cols-2'>
      {[data.phone, data.whatsapp].map((method) => {
        const Icon = method.icon,
          wa = method.label === "واتساپ";
        return (
          <motion.a
            key={method.label}
            href={method.href}
            target={wa ? "_blank" : undefined}
            rel={wa ? "noopener noreferrer" : undefined}
            variants={cardVariants}
            className='group relative flex gap-4 overflow-hidden rounded-3xl bg-base-100/60 p-5 backdrop-blur-xl'>
            <div className='relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10'>
              <Icon size={32} variant='Bulk' className='text-primary' />
            </div>
            <div className='relative z-10 flex flex-col gap-2'>
              <h3 className='text-xl font-black'>{method.label}</h3>
              <p className='leading-7 text-base-content/70'>
                برای دریافت مشاوره، هماهنگی پروژه و شروع همکاری از این طریق با
                من در ارتباط باشید.
              </p>
              <span className='text-sm font-bold text-primary'>
                {method.number}
              </span>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
